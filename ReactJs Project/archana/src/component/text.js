import React from "react";
import Image from "./img.jpg"
const Text = (props) => {
    console.log(props)
    return(
        <div>
            {props.children}
            <h3 style={{color:"orange"}}>By using props</h3>
            <h2>Hi my name is {props.name} ::my native place is {props.place} ::from{props.state}</h2>
            <img src={Image}></img>
       
        </div>
    )
}
export default Text;