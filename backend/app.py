from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from rag import ask_question, initialize_rag

app = FastAPI()

ready = False


@app.on_event("startup")
def startup():
    global ready
    initialize_rag()
    ready = True


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve PDFs
app.mount("/documents", StaticFiles(directory="documents"), name="documents")


class Question(BaseModel):
    question: str


@app.get("/")
def home():
    return {"message": "Backend Running"}


@app.get("/status")
def status():
    return {"ready": ready}


@app.post("/ask")
def ask(data: Question):
    return ask_question(data.question)