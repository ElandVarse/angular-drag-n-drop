from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # ou ["*"] para testes
    allow_methods=["*"],
    allow_headers=["*"],
)

class DataRequest(BaseModel):
    items: List[int]

def node1(item):
    return item * 2

def node2(item):
    return item + 3

def node_fora_1(results):
    return sum(results)

def node_fora_2(total):
    return {"total_final": total, "status": "pipeline complete 🎉"}

@app.post("/pipeline")
def pipeline(data: DataRequest):
    processed = []

    for item in data.items:
        step1 = node1(item)
        step2 = node2(step1)
        processed.append(step2)

    total = node_fora_1(processed)
    final_output = node_fora_2(total)

    return {
        "processed_items": processed,
        "final_output": final_output
    }

