from dotenv import load_dotenv
load_dotenv()

import os

from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough

# Global variables
embeddings = None
vectorstore = None
retriever = None
llm = None
prompt = None
rag_chain = None


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


def initialize_rag():
    global embeddings
    global vectorstore
    global retriever
    global llm
    global prompt
    global rag_chain

    if rag_chain is not None:
        return

    print("========== Initializing RAG ==========")

    api_key = os.getenv("GROQ_API_KEY")

    if not api_key:
        raise Exception("GROQ_API_KEY not found in .env file")

    print("Groq API Key Loaded Successfully")

    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    print("Embeddings Loaded")

    vectorstore = Chroma(
        persist_directory="./chroma_db",
        embedding_function=embeddings
    )

    print("Vector Database Loaded")

    retriever = vectorstore.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 3}
    )

    print("Retriever Ready")

    llm = ChatGroq(
        model="llama-3.3-70b-versatile",
        temperature=0
    )

    print("Groq Model Connected")

    prompt = ChatPromptTemplate.from_template(
        """
You are a document question answering assistant.

Use ONLY the information present in the context.

If the answer is not available, reply exactly:

I don't know based on the provided documents.

Keep the answer short (2-4 sentences).

Context:
{context}

Question:
{question}
"""
    )

    rag_chain = (
        {
            "context": retriever | format_docs,
            "question": RunnablePassthrough()
        }
        | prompt
        | llm
    )

    print("========== RAG Ready ==========")


def ask_question(question):
    try:
        initialize_rag()

        print("\nQuestion:", question)

        # Retrieve relevant documents
        docs = retriever.invoke(question)

        # Generate answer
        response = rag_chain.invoke(question)

        source_pdf = ""
        page_number = ""

        if docs:
            source = docs[0].metadata.get("source", "")
            source_pdf = source.replace("\\", "/").split("/")[-1]

            # PyPDFLoader stores pages starting from 0
            page_number = docs[0].metadata.get("page", 0) + 1

        print("Answer Generated Successfully")

        return {
            "answer": response.content,
            "source": source_pdf,
            "page": page_number
        }

    except Exception as e:
        print("\n========== ERROR ==========")
        print(type(e).__name__)
        print(e)
        print("===========================\n")
        raise