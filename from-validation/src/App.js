// src/App.js
import React, { useState } from 'react';
import 'tachyons/css/tachyons.min.css';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Check password length
    if (name === 'password' && value.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation - check if all fields are filled
    if (formData.name && formData.email && formData.password) {
      // Additional validation for password length
      if (formData.password.length < 8) {
        setPasswordError('Password must be at least 8 characters');
        return;
      }

      // Perform form submission logic here
      console.log('Form submitted:', formData);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="vh-100 flex items-center justify-center">
      <form className="pa4 black-80" onSubmit={handleSubmit}>
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">
            Name
          </label>
          <input
            id="name"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email" className="f6 b db mb2">
            Email
          </label>
          <input
            id="email"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password" className="f6 b db mb2">
            Password
          </label>
          <input
            id="password"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {passwordError && (
            <p className="f6 red mv1">{passwordError}</p>
          )}
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
