import React, { useState } from 'react';
import axios from 'axios'; 

function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (password !== repassword) newErrors.repassword = 'Passwords must match';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5001/signup', { name, email, password });
        alert('Successfully Joined');
        setName('');
        setEmail('');
        setPassword('');
        setRepassword('');
        setErrors({});
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
      }
    }
  };

  return (
    <div className="App">
      <style>
        {`
          .App {
            font-family: Arial, sans-serif;
            background-color: #fff;
            color: #333;
            padding: 20px;
            max-width: 600px;
            margin: 0 auto;
            text-align: center; /* Center heading and paragraph */
          }
          
          h1 {
            color: #fd7e14; /* Orange */
            margin-bottom: 20px;
          }
          
          section {
            margin-bottom: 20px;
          }
          
          section p {
            font-size: 18px;
            color: #343a40; /* Dark grey for contrast */
            margin: 0;
          }
          
          .form-container {
            border: 2px solid #fd7e14; /* Orange border */
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            display: inline-block; /* Box for the form only */
            max-width: 500px;
            text-align: left; /* Align form fields to the left */
            width: 100vw;
            height: 10vhurl
          }
          
          .form-container h3 {
            color: #fd7e14; /* Orange */
            margin-bottom: 20px;
            text-align: center; /* Center form heading */
          }
          
          .form-container label {
            display: block;
            margin-bottom: 5px;
            color: #495057; /* Darker grey for labels */
            font-weight: bold;
          }
          
          .form-container input[type="text"],
          .form-container input[type="email"],
          .form-container input[type="password"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ced4da;
            border-radius: 6px;
            box-sizing: border-box;
            font-size: 16px;
            margin-bottom: 15px;
          }
          
          .form-container input[type="password"] {
            min-length: 6;
          }
          
          .form-container button {
            background-color: #fd7e14; /* Orange button */
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
            width: 100%;
          }
          
          .form-container button:hover {
            background-color: #e06c00; /* Darker orange on hover */
          }
          
          .form-container p {
            color: #dc3545; /* Red for error messages */
            font-size: 14px;
            margin-top: -10px; /* Slightly raise error messages */
          }
          
          footer {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
          }
          
          footer a {
            color: #fd7e14; /* Orange links */
            text-decoration: none;
            font-size: 16px;
          }
          
          footer a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <h1>WELCOME TO EXPLOREMORE TRAVEL</h1>
      <section>
        <center>
        <p>THE WORLD IS A BOOK, AND THOSE WHO DO NOT TRAVEL READ ONLY ONE PAGE!!</p>
        <p>JOIN US FOR AN ADVENTURE!!</p><br />
        </center>
      </section>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>SIGNUP HERE</h3>
          <label htmlFor="name">Name</label><br />
          <input 
            type="text" 
            id="name" 
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br />
          <p>{errors.name}</p>

          <label htmlFor="mail">Email</label><br />
          <input 
            type="email" 
            id="mail" 
            placeholder="Enter Your Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <p>{errors.email}</p>

          <label htmlFor="password">Password</label><br />
          <input 
            type="password" 
            id="pass" 
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          /><br />
          <p>{errors.password}</p>

          <label htmlFor="repassword">Confirm Password</label><br />
          <input 
            type="password" 
            id="repass"
            placeholder="Enter Your Password Again"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            required
          /><br />
          <p>{errors.repassword}</p><br />

          <button type="submit">SUBMIT</button>
          <br />
        </form>
      </div>
      <footer>
        <a href="services">SERVICES</a>
        <a href="instagram">INSTAGRAM</a>
        <a href="facebook">FACEBOOK</a>
      </footer>
    </div>
  );
}

export default Home;
