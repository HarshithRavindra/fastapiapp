from fastapi import APIRouter

router = APIRouter(prefix="/company", tags=["Company"])


@router.get("/")
def read_company(): 
    return {"Company": "This is the company endpoint."}

@router.get("/{company_id}")
def read_company(company_id: int):
    return {"Company ID": company_id}