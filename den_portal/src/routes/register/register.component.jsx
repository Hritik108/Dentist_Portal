import React, { useState, useEffect } from "react";
import "./register.component.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
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
    
      // <div className="register-container">
      //   <h1>Register</h1>
      //   <form onSubmit={onSubmit}>
          /* <div>
            <label className="register-label" htmlFor="customerId">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={customerId}
              onChange={handleCustomerIdChange}
            />
          </div> */
        /* <div>
            <label htmlFor="address">Email:</label>
            <input
              type="text"
              id="email"
              value={address}
              onChange={handleAddressChange}
            />
          </div> */
      //     <div>
      //       <label htmlFor="city">Phone number</label>
      //       <input
      //         type="text"
      //         id="number"
      //         value={city}
      //         onChange={handleCityChange}
      //       />
      //     </div>
      //     <div>
      //       <label htmlFor="password">Password:</label>
      //       <input
      //         type="password"
      //         id="password"
      //         value={password}
      //         onChange={handlePasswordChange}
      //       />
      //     </div>
      //     <button type="submit" onClick={() => load_messages()}>
      //       Register
      //     </button>
      //   </form>
      // </div>

      <div className="register">
        {/* {console.log("User", user)} */}
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
          // value={user.email}
          placeholder="Your Email"
          // onChange={handleChange}
          id="email"
          value={address}
          onChange={handleAddressChange}
        ></input>
        <div>
          Gender:
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
         <input
          type="tel"
          name="number"
          id="number"
          placeholder="Your Number"
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
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
