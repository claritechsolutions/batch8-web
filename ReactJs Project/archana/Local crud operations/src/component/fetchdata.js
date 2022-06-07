import React, {useEffect, useState} from "react";
import axios from 'axios';
const DataFetch=()=>{
    const [Posts, setPosts]= useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            console.log("Response=>".Response);
            setPost(Response.data)
        })
        .catch("error",=>error);
    },[])
    return(
        <div>
            <ul>
                {
                    Posts.map(post=><li>{post.title}</li>)
                }
            </ul>
        </div>
    )
}
export default DataFetch