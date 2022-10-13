from fastapi import Depends, FastAPI
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from starlette.authentication import requires
from fastapi_auth_middleware import AuthMiddleware, FastAPIUser
import uvicorn

app = FastAPI()
security = HTTPBasic()

@app.get("/profile")
async def main(credentials: HTTPBasicCredentials = Depends(security)):
    return {"name": "John Smith"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="info")