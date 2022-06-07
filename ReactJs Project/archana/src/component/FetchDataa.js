import React,{useState, useEffect} from "react";
import axios from "axios";
function FetchDataa(){
  const [items, setItems]=useState([])
  const [id, setId]=useState(1)
  useEffect(()=>{
      const value={
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    axios.post(`https://jsonplaceholder.typicode.com/posts`,value)
    .then(resolve=>console.log(resolve))
    .catch(error=>setItems(error))
  },[])
  return(
    <div>
      <ul>
      {
        items.map(item=><li>{item.title}</li>)
      }</ul>
      {/* <input value={id} onChange={e=>setId(e.target.value)}></input>
      <div>{items.title}</div> */}
    </div>
  )
}
export default FetchDataa

