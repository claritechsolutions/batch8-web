
import './App.css';
import './index.css';
import Post from './component/localcrud/Post';
import Get from './component/localcrud/Get';
import Put from './component/localcrud/Put';
import Delete from './component/localcrud/Delete';
// Routing
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/localcrud/Navbar';



function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Get/>}></Route>
         <Route path="/post" element={<Post />}></Route>
          <Route path="/put" element={<Put />}></Route>   
        <Route path="/delete" element={<Delete />}></Route> 
         
      </Routes > 
    </>
  );
}

export default App;



// import React,{ useState } from "react";
// const App=()=>{
//     const [count, setCount]=useState(0)
// return(
//     <div>
//         <h1>useState hook{count}</h1>
//        <button onClick={()=>setCount(count+1)}>Update data</button>
//     </div>
// );
// };
// export default App;
