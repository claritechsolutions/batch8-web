
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Post = () => {
	const [data, setData] = useState([])
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[id,setId] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])

    const postData=()=>{
       
        axios.post('http://localhost:3001/users',{
            id,
            name,
        email
        })
        .catch(err => console.log(err))  
    }
    const arr =data.map((data,index)=>{
        return(
            <tr>
               
                <td style={{border:'1px solid black'}}>{data.id}</td>
                <td style={{border:'1px solid black'}}>{data.name}</td>
                <td style={{border:'1px solid black'}}>{data.email}</td>

            </tr>
        )
    })

	return (
		<div>
			 <h3 style={{textAlign:"center"}}>Local Json file Post method by using Axios Method</h3>
			 <form style={{textAlign:"center"}} >
             <label><b>Id-</b></label>
                <input type="text" value={id} onChange={(e)=>setId (e.target.value)}/>
                <label><b>Name-</b></label>
                <input type="text" value={name} onChange={(e)=>setName (e.target.value)}/>
                {/* <hr></hr> */}
                <label><b>Email ID-</b></label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <hr></hr>
                <button type="button" class="btn btn-success" onClick={postData}>Add new member</button>
<hr></hr>
            </form>
            <table class="table table-striped">
                <thead style={{border:'1px solid black'}}>
                <tr class="bg-success">
                    <th scope="col" style={{border:'1px solid black' }}>ID</th>
                    <th scope="col" style={{border:'1px solid black'}}>Name</th>
                    <th scope="col" style={{border:'1px solid black'}}>Email=ID</th>
                </tr>
                </thead>
                <tbody>{arr}  </tbody>
               
            </table>

		</div>
	)
}

export default Post