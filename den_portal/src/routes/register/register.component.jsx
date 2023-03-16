import React, { useState, useEffect } from "react";
import "./register.component.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [customerId, setCustomerId] = useState("");
  const [address, setAddress] = useState("");
  const [gender , setGender] = useState("")
  const [password, setPassword] = useState("");

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }
  async function load_messages() {
    let name = $("#name").val();
    let number = $("#number").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let address = $("#address").val();
    let gender = $("#gender").val();
    const data = {
      name: name,
      number: number,
      email: email,
      password: password,
      address: address,
      gender : gender
    };
    console.log(data);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error));
  }
  return (
      <div className="register">

        <h1>Register</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={customerId}
          onChange={handleCustomerIdChange}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          id="email"
          value={address}
          onChange={handleAddressChange}
        ></input>
        <label>
          <select value={gender} id="gender" onChange={handleGenderChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            
          </select>
        </label>
         <input
          type="tel"
          name="number"
          id="number"
          placeholder="Your Number"
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
        ></input>
        <input
          type="text"
          name="text"
          
          id="address"
          placeholder="Enter Your address"
        ></input>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Your Password"
          onChange={handlePasswordChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          placeholder="Re-enter Password"
          id="reenterPassword"
          // onChange={handleChange}
        ></input>
        <div className="button" onClick={() => load_messages()}>
          Register
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/login")}>
          Login
        </div>
      </div>
    
  );
};

export default Register;
