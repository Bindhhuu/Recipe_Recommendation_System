import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Send data to the backend
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Handle the response from the server
      navigate('/Dashboard'); // Navigate to the Dashboard on success
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error signing up.'); // Handle error feedback
    }
  };

  return (
    <div className="body_register">
      <div className="heading">
        <h2>Cooking Stories</h2>
      </div>
      <div className="card signup-card">
        <h4>Sign Up To Make Amazing Recipes</h4>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button className="btn" type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
