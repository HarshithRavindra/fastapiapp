
from pydantic import BaseModel
from typing import Optional
from .job import JobResponse,JobBase

class companyBase(BaseModel):
    name: str
    email: str
    phone: str

class CompanyCreate(companyBase):
    pass



class CompanyUpdate(companyBase):
    name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None

class CompanyResponse(companyBase):
    id: int
    jobs: list[JobResponse]

    class Config:
        from_attributes = True

