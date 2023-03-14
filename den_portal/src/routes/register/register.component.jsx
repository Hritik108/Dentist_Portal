import React, { useState, useEffect } from "react";
import "./register.component.css";
import $ from "jquery";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [customerId, setCustomerId] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function load_messages() {
    let name = $("#name").val();
    let number = $("#number").val();
    let email = $("#email").val();
    let password = $("#password").val();
    const data = {
      name: name,
      number: number,
      email: email,
      password: password,
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

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label className="register-label" htmlFor="customerId">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={customerId}
            onChange={handleCustomerIdChange}
          />
        </div>
        <div>
          <label htmlFor="address">Email:</label>
          <input
            type="text"
            id="email"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="city">Phone number</label>
          <input
            type="text"
            id="number"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" onClick={() => load_messages()}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
