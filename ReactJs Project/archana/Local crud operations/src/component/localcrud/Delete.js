import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Delete = () => {
	const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])

    
    const postDelete=(id,e)=>{
        e.preventDefault();
        axios.delete(`http://localhost:3001/users/${id}`)
        .then(res=>console.log('Deleting data!!!',res))
        .catch(err => console.log(err))  
    }
    const arr =data.map((data,index)=>{
        return(
            <tr >
               
                <td style={{border:'1px solid black'}}>{data.id}</td>
                <td style={{border:'1px solid black'}}>{data.name}</td>
                <td style={{border:'1px solid black'}}>{data.email}</td>
                <td style={{border:'1px solid black'}}><button class="bg-danger" onClick={(e)=>postDelete(data.id,e)}>Delete</button> </td>

            </tr>
        )
    })


	return (
		<div>
			 <h3 style={{textAlign:"center"}}>Local Json file Delete  method by using Axios Method</h3>
			 
            <table class="table table-striped">
                <thead style={{border:'1px solid black'}}>
                <tr class="bg-success">
                    <th scope="col" style={{border:'1px solid black' }}>ID</th>
                    <th scope="col" style={{border:'1px solid black' }}>Name</th>
                    <th scope="col" style={{border:'1px solid black' }}>Email-ID</th>
                    <th scope="col " style={{border:'1px solid black' }}>Delete</th>

                </tr>
                </thead>
               {arr}  
            </table>

		</div>
	)
}

export default Delete
