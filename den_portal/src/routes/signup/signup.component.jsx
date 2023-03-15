import React, { useState } from "react";
import "./signup.component.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../contexts/context.accoounts";
import { useContext } from "react";
import Account from "../account/account.component";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Signup = () => {
  const {setName} = useContext(AccountContext);
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
          console.log(data.data)
          setName(data.data[0])
          navigate("/account");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={customerId}
        onChange={ handleCustomerIdChange}
        placeholder="Enter your Email"
        id="customerId"
      ></input>
      <input
        type="password"
        name="password"
        value={password}
        onChange={ handlePasswordChange}
        placeholder="Enter your Password"
        id="password"
      ></input>
      <div className="button" onClick={load_messages}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export default Signup;
