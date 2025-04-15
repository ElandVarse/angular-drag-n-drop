# 🔁 Node Pipeline - Mini Flow Orchestrator with FastAPI

This project is a modular node-based pipeline using **Python + FastAPI** in the backend. It simulates a processing flow where each “node” performs an operation and the data flows through this graph until it generates the final result.

> Ideal for playing with flow logic, orchestration, automation and to serve as the basis for a future drag & drop visual interface (Angular 👀).

---

## 🧠 How does it work?

1. The backend receives a list of numbers.
2. Each number passes through two nodes (`*2` and `+3`).
3. The result of each number is added up at the end.
4. The answer includes the processed items and the final result.

---

## 🛠️ Technologies

- [Python 3.10+](https://www.python.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Uvicorn](https://www.uvicorn.org/)

---

## 🚀 How to run the project

### 1. Clone the repository

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd backend 
```

### 2. Create the virtual environment 

```bash
python3 -m venv venv
```

### 3. Activate the virtual environment

```bash
source venv/bin/activate
```

### 4. Run the server 🎯

```bash
uvicorn main:app --reload
```

### 5. Test Example

```bash
{
    “items": [1, 2, 3]
}
```
