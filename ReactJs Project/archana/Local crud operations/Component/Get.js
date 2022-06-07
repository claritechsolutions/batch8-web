
import React, {useState, useEffect} from "react";
import axios from "axios";
const Get=()=>{
    const[data, setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/users')
        .then(Response=>{
            console.log("Data from the server",Response.data)
            setData(Response.data)
            
        }).catch(err=>console.log(err))
    },[])
    const arr=data.map((data,index)=>{
return(
    <tr>
        <td style={{border:'1px solid black'}}>{data.id}</td>
        <td style={{border:'1px solid black'}}>{data.name}</td>
        <td style={{border:'1px solid black'}}>{data.email}</td>
    </tr>
)
    })
    return(<div>
        <h3 style={{textAlign:"center", backgroundcolor:"red"}}>Local Json file Get method by using Axios Method</h3>
        <table class="table table striped">
            <thead>
                <tr class="bg-success">
                    <th scope="col"style={{border:'1px solid black'}} >ID</th>
                    <th scope="col" style={{border:'1px solid black'}}>Name</th>
                    <th scope="col" style={{border:'1px solid black'}}>Email-ID</th>
                </tr>
            </thead>
            {arr}
        </table>

    </div>
    )
}
export default Get
