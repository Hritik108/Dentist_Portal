import React, { useState } from "react";
import "./signup.component.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [customerId, setCustomerId] = useState("");
  const [password, setPassword] = useState("");

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send data to server and handle response
  };

  async function load_messages(e) {
    let ID = $("#customerId").val();
    let password = $("#password").val();
    const data = {
      ID: ID,
      password: password,
    };
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        if (data.data == "WRONG PASSWORD") {
          alert("PASSWORD DOESN NOT MATCH");
        }
        if (data.data == "CUSTOMER ID NOT FOUND") {
          alert("CUSTOMER ID OR EMAIL NOT FOUND");
        } else {
          navigate("/about");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="register-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="register-label" htmlFor="customerId">
            Customer ID:
          </label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={handleCustomerIdChange}
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
          SignIn
        </button>
      </form>
    </div>
  );
};

export default Signup;
