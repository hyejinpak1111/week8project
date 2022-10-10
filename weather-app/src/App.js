import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import { AuthContext } from './contexts/AuthProvider';
import { useContext } from 'react';

function App() {
  // const { login, logout } = useContext(AuthContext)
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark mb-5">
        <div className="navbar-brand mx-auto">Victor's Weather App </div>
        <div className="navbar-nav">
          <button  className="btn btn-primary">Login</button>
        </div>
      </nav>
      <div className='items'><Home /></div>
    </BrowserRouter>

  );
}

export default App;

