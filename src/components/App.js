
import React,{useState} from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { setName,setEmail } from "../features/userSlice";

const App = () => {
const dispatch=useDispatch();
const {name,email}=useSelector((state)=>state.user);
  return (
    <div>
      <h1>User Information</h1>
        {/* Do not remove the main div */}
        <p>Name:</p>
        <input 
        type="text"
        onChange={(e)=>dispatch(setName(e.target.value))}
        value={name}
      />
      <p>Email:</p>
        <input 
        type="email"
        onChange={(e)=>dispatch(setEmail(e.target.value))}
        value={email}
      />
      <br></br>
      <p>Current values in store: </p>
    <p className="output">Name - {name}</p>
    <p className="output">Email - {email}</p>
    </div>
  )
}

export default App
