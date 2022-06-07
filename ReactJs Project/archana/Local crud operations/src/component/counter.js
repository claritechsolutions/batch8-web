import  React, { useState } from 'react';
const Counter= ()=>{
    const initialValue = 0;
    const [Counter, setCounter] = useState(initialValue);

    const incrementFive=()=>{
        for(let i=0; i<5; i++){
            setCounter((prevValue)=>prevValue+1);

        }
    }
    const incrementTen=()=>{
        for(let i=0; i<10; i++){
            setCounter((prevValue)=>prevValue+1);

        }
    }
    return  (
        <div>
            <h1>This is React Hooks(useState)</h1>
            <h4>Count: {Counter}</h4>
            {/* {<button onClick={()=> setCounter(Counter+1)}>count --{Counter}</button>} */}
            <button type="button" class="btn btn-primary mx-2 mt-3" onClick ={()=> setCounter(Counter+1)}>Increment</button> 
           <button type="button" class="btn btn-success mx-2 mt-3"  onClick={()=> setCounter(Counter-1)}>Decrement</button> 
           <button type="button" class="btn btn-danger mx-2 mt-3"  onClick={()=> setCounter(initialValue)}>Reset</button> 
           <button type="button" class="btn btn-warning mx-2 mt-3"  onClick={incrementFive}>IncrementBy5</button> 
           <button type="button" class="btn btn-success mx-2 mt-3"  onClick={incrementTen}>IncrementBy10</button> 
        </div>
    )   
 
}
export default Counter