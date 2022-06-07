
import React,{ useState } from react;
const App=()=>{
    const [count, setCount]=useState()
return(
    <div>
        <h1>useState hook</h1>
       <button onClick={()=>setCount(7)}>Update data</button>
    </div>
);
};
export default App;
