// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Get = () => {
// 	const [data, setData] = useState([])
// 	useEffect(() => {
// 		axios.get('https://jsonplaceholder.typicode.com/posts')
// 			.then(response => {
// 				console.log("Getting from Server=>", response.data)
// 				setData(response.data)
// 			})

// 			.catch(err => console.log(err))

// 	}, [])

// 	const arr = data.map((data, index) => {
// 		return (
// 			<tr>

// 				<td style={{ border: '1px solid black' }}>{data.id}</td>
// 				<td style={{ border: '1px solid black' }}>{data.title}</td>
// 				<td style={{ border: '1px solid black' }}>{data.body}</td>

// 			</tr>
// 		)
// 	})
// 	return (
// 		<div>
// 			 <h3 style={{textAlign:"center", backgroundColor:"red", textColor:"white"}}>Axios Method-Get Data</h3>
// 			<table class="table table-striped ">
// 				<thead style={{ border: '1px solid black' }}>
// 					<tr class="bg-success">
// 						<th scope="col">ID</th>
// 						<th scope="col">Title</th>
// 						<th scope="col">Body</th>
// 					</tr>
// 				</thead>
// 				{arr}
// 			</table>
// 		</div>
// 	)
// }

// export default Get
import React, {useState, useEffect} from "react";
import axios from "axios";
const Get=()=>{
    const[data, setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            console.log("Data from the server",Response.data)
            setData(Response.data)
            
        }).catch(err=>console.log(err))
    },[])
    const arr=data.map((data,index)=>{
return(
    <tr>
        <td style={{border:'1px solid black'}}>{data.id}</td>
        <td style={{border:'1px solid black'}}>{data.title}</td>
        <td style={{border:'1px solid black'}}>{data.body}</td>
    </tr>
)
    })
    return(<div>
        <h3 style={{textAlign:"center", backgroundcolor:"red"}}>Axios method-Get Data</h3>
        <table class="table table striped">
            <thead style={{border:'1px solid black'}}>
                <tr class="bg-success">
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
        </table>
{arr}
    </div>)
}
export default Get
