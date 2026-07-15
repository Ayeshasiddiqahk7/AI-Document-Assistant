# 📄 AI Document Assistant

An AI-powered document question-answering system built using **FastAPI**, **React**, **LangChain**, **ChromaDB**, **HuggingFace Embeddings**, and **Groq LLM**. The application allows users to ask questions about PDF documents and receive accurate, context-aware answers using Retrieval-Augmented Generation (RAG).

---

## 🚀 Features

- Upload and process PDF documents

- Ask questions in natural language

- Context-aware answers using Retrieval-Augmented Generation (RAG)

- Fast semantic search with ChromaDB

- HuggingFace sentence embeddings

- Groq LLM for answer generation

- React frontend with FastAPI backend

---

## 🛠 Tech Stack

### Frontend

- React

- Vite

- Axios

- CSS

### Backend

- FastAPI

- LangChain

- ChromaDB

- HuggingFace Embeddings

- Groq API

- PyPDF

---

## 📂 Project Structure

```

Doc-assistant/

│

├── backend/

│   ├── [app.py](http://app.py)

│   ├── [rag.py](http://rag.py)

│   ├── [ingest.py](http://ingest.py)

│   ├── [config.py](http://config.py)

│   ├── requirements.txt

│   ├── documents/

│   ├── chroma_db/

│   └── .env

│

├── frontend/

│   ├── src/

│   ├── public/

│   ├── package.json

│   └── vite.config.js

│

├── .gitignore

├── package.json

└── [README.md](http://README.md)

```

---

## ⚙️ Installation

### 1. Clone the repository

```bash

git clone [https://github.com/your-username/doc-assistant.git](https://github.com/your-username/doc-assistant.git)

cd doc-assistant

```

---

### 2. Backend Setup

Create a virtual environment.

```bash

python -m venv venv

```

Activate it.

**Windows**

```bash

venv\Scripts\activate

```

**Linux / macOS**

```bash

source venv/bin/activate

```

Install dependencies.

```bash

pip install -r backend/requirements.txt

```

---

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` folder.

```env

GROQ_API_KEY=your_groq_api_key

```

---

### 4. Build the Vector Database

Place your PDF files inside:

```

backend/documents/

```

Run:

```bash

cd backend

python [ingest.py](http://ingest.py)

```

This creates the Chroma vector database.

---

### 5. Start the Backend

```bash

cd backend

uvicorn app:app --reload

```

Backend runs on:

```

[http://127.0.0.1:8000](http://127.0.0.1:8000)

```

Swagger API:

```

[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

```

---

### 6. Start the Frontend

Open another terminal.

```bash

cd frontend

npm install

npm run dev

```

Frontend runs on:

```

[http://localhost:5173](http://localhost:5173)

```

---

## 📖 Usage

1. Start the backend.

2. Start the frontend.

3. Open the frontend in your browser.

4. Enter a question related to the uploaded PDF.

5. Receive an AI-generated answer based on the document.

---

## 📸 Screenshots

Add screenshots of:

- Home page

- Asking a question

- AI response

- Swagger API (optional)

---

## 🔮 Future Enhancements

- PDF upload through the web interface

- Multiple document support

- Conversation history

- Source highlighting

- Authentication

- Docker deployment

---

