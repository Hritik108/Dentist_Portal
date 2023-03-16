import React, { useState } from "react";
import "./signup.component.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../contexts/context.accoounts";
import { useContext } from "react";
import Account from "../account/account.component";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [show, setShow] = useState(false);
  const [error , setError] = useState("")
  const {setName,setIsLogin,setEmail,setNumber,setAddress,setId,setGender} = useContext(AccountContext);
  const navigate = useNavigate();
  const [customerId, setCustomerId] = useState("");
  const [password, setPassword] = useState("");

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
          setError("Wrong Password")
          setShow(true)
        }
        else if (data.data == "CUSTOMER ID NOT FOUND") {
          setError("Customer ID not found")
          setShow(true)
        } 
        else {
          console.log(data.data)
          setName(data.data[0])
          setEmail(data.data[1])
          setNumber(data.data[2])
          setCustomerId(data.data[6])
          setAddress(data.data[4])
          setGender(data.data[5])
          setIsLogin(true)
          navigate("/account");
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
        {(() => {
        if (show) {
          return (

              <Alert variant="danger" style={{transitionDelay:"1s"}} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                  {error}
                </p>
              </Alert>
                
          )
        }  
      })()}
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
    </div>
  );
};

export default Signup;
