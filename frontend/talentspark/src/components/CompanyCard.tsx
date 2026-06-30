import { useState, useEffect } from "react";
import { getCompanies } from "../Services/CompanyService";
import type {Company} from "../types/company";

function CompanyCard(){
    const [companies , setCompanies] = useState <Company[]>([]);
    const fetchCompanies = async()=>{
        const companies = await getCompanies()
        setCompanies(companies)
    }
    useEffect(()=>{
        fetchCompanies()
    },[])
    return (
        <div>
            {companies.map((company)=> (
                <div key = {company.id}>
                    <h1> {company.name}</h1>
                    <p>Email: {company.email}</p>
                    <p>Phone: {company.phone}</p>
                    <p>Location: {company.location}</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}

export default CompanyCard