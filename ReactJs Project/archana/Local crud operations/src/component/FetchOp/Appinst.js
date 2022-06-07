import './App.css';
import './index.css';
import Post from './component/FetchOp/Post';
import Get from './component/FetchOp/Get';
import Put from './component/FetchOp/Put';
import Delete from './component/FetchOp/Delete';
// Routing
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/FetchOp/NavBar';



function App() {
  return (
    // <div className="App">
    //   <Home />
    //   <About />
    // </div>
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



