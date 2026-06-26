from fastapi import APIRouter

router=APIRouter(prefix="/job", tags=["Job"])

@router.get("/")
def read_job():
    return {"Job": "This is the job endpoint."}

@router.get("/{job_id}")
def read_job(job_id: int):
    return {"Job ID": job_id}