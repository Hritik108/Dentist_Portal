import React, { useState } from 'react';
import './signup.component.css';

const Signup = () => {
  const [customerId, setCustomerId] = useState('');
  const [password, setPassword] = useState('');

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      customerId: customerId,
      password: password
    };

    console.log(data);

    // TODO: Send data to server and handle response
  };

  return (
    <div className='register-container'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='register-label' htmlFor="customerId">Customer ID:</label>
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
        <button type="submit">SignIn</button>
      </form>
    </div>
  );
};

export default Signup;
