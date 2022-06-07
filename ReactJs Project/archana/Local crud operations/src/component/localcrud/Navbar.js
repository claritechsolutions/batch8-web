import React from 'react'
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="container-fluid mt-4">
            <div>
    <nav>
      <NavLink className="get" to="/"><b>View Members</b></NavLink>
      <NavLink to="/post"><b>Add Member</b></NavLink> 
       <NavLink to="/put"><b>Edit/Update Member</b></NavLink>  
      <NavLink to="/delete"><b>Delete Member</b></NavLink>
    </nav>
    </div>
    </div>
  )
}

export default Navbar