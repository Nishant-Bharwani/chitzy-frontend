import './App.css';
import Navbar from './components/shared/Navbar/Navbar';
import SideBar from './components/shared/SideBar/SideBar';
import logo from './logo.svg';

import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
