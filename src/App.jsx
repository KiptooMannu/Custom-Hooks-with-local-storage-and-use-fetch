// src/components/App.jsx

import React, { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';


import './App.scss'

function App() {
  const [username, setUsername] = useLocalStorage('username', 'Guest');
  const [nameInput, setNameInput] = useState(username);

  const handleInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(nameInput);
  };

  return (
    <div className='form'>
      <h1>Hello, {username}!</h1>
      <div className="forma">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nameInput}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        <button type="submit">Save</button>
      </form>
      </div>
   
    </div>
  );
}

export default App;
