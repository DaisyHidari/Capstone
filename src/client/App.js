import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/Login';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
        <h1>Sneakers List</h1>
        <img id='comp-img' src='./computer.png'></img>
        <h2>Welcome to Our Store!</h2>
        <p>Explore our wide range of products and start shopping.</p>
        <Login />
        <footer>
        <p>&copy; 2024 E-Commerce Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;