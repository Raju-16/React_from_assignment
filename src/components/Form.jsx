import { useState } from "react"


export const Form =()=>{
    const [formdata,setFormdata] = useState();
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormdata({...formdata,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("https://localhost:8080/employee_details",{
            mehtod:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formdata)
        });
        setFormdata("");

    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              name="Name"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="Number"
              placeholder="Enter your Age"
              name="Age"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter your Address"
              name="Address"
            />
          </div>
          <div>
            <select
              onChange={handleChange}
              name="Department"
              className="Department"
            >
              <option value="Preference">Select Your Preference</option>
              <option value="FrontEnd">FrontEnd</option>
              <option value="Backend">BackEnd</option>
              <option value="BlockChain">Block Chain</option>
              <option value="Web">Web 3.0</option>
              <option value="React">React</option>
              <option value="React Native">React Native</option>
              <option value="Next.js">Next.js</option>
              <option value="JavaScript">JavaScript</option>
            </select>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="Number"
              placeholder="Enter your Salary"
              name="Salary"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="checkbox"
              placeholder="Marriage_status"
              name="Marriage_Status"
            />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
}