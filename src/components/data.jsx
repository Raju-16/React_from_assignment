import { useEffect } from "react";
import { useState } from "react"

export const ShowEmployee =()=>{
    const [employee,setEmpolyee] = useState([]);

    const getData =async()=>{
        const data = await fetch("https://localhost:8080/employee_details").then((d)=>d.json());
        setEmpolyee(data)
    }
    console.log(employee);
    useEffect(()=>{
        getData()
    },[])


return (
    <div>
        <table className="table data">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                    <th>DEPARTMENT</th>
                    <th>SALERY</th>
                </tr>
            </thead>
            <tbody  className="tbody">
                {employee.map((item)=>{
                    return (
                        <tr className="row">
                            <td className="Name">{item.Name}</td>
                            <td className="Age">{item.Age}</td>
                            <td className="Address">{item.Address}</td>
                            <td className="salary">{item.salary}</td>
                            <td className="Department">{item.Department}</td>
                            <td className="marriage_status">{item.marriage_status}</td>

                        </tr>
                    )
                })}

            </tbody>
        </table>
    </div>
);
            }