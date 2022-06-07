
import React, { useState, useEffect } from 'react'
import axios from "axios";
const PutData = () => {
    const [data, setData] = useState([])
    const [post, setPost] = useState('')
    // const [patch, setPatch] = useState('')
    const [name, setName] = useState('')
    const [email, setemail] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3001/users`)
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])

    const put = (id, e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/users/${id}`, {
            
            name,
            email
        }).then((response) => {
            console.log("put data=>", response.data)
            setPost(response.data);
        });

    }
    // if (!post) return "No post!"

    const patchData = (id, e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3001/users/${id}`, {
            // 
            email

        }).then((response) => {
            console.log("patch data=>", response.data)
            // setPatch(response.data);
            setemail(response.data)
        });

    }

    const arr = data.map((data) => {
        return (
            <tr class="bg-success">

                <td style={{ border: '1px solid black' }}>{data.id}</td>
                <td style={{ border: '1px solid black' }}>{data.name}</td>
                <td style={{ border: '1px solid black' }}>{data.email}</td>
                <td style={{ border: '1px solid black' }}><button class="bg-success" onClick={(e) => patchData(data.id, e)}>Patch</button> </td>
                <td style={{ border: '1px solid black' }}><button class="bg-primary" onClick={(e) => put(data.id, e)}>Put</button> </td>


            </tr>
        )
    })

    return (
        <div class="container">
            <div>
                <h3 style={{ textAlign: "center" }}>Local Json file Patch & Put method by using Axios Method</h3>
                <form style={{ textAlign: "center" }} >
                    <label><b>Name::</b></label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    {/* <hr></hr> */}
                    <label><b>::Email::</b></label>
                    <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
                    <hr></hr>
                    {/* <button type="button" class="btn btn-success" onClick={postData}>POST</button> */}

                </form>
                {/* <h3 style={{ textAlign: "center" }}>Axios Method-Put Data<br></br>
                    <button type="button" class="btn btn-success" onClick={putData}>Put</button>::
                    <button type="button" class="btn btn-success" onClick={patchData}>Patch</button>
                </h3> */}
                <table class="table table-striped">
                    <thead style={{ border: '1px solid black' }}>
                        <tr>
                            <th scope="col" style={{ border: '1px solid black' }}>ID</th>
                            <th scope="col" style={{ border: '1px solid black' }}>Name</th>
                            <th scope="col" style={{ border: '1px solid black' }}>Email</th>
                            <th scope="col" style={{ border: '1px solid black' }}>Edit</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    {arr}

                </table>
                {/* {post.name}
                {post.email}
                {patch.title} */}
            </div>
        </div>
    )
}

export default PutData