import './App.css';
import Navbar from './components/shared/Navbar/Navbar';
import Navbar1 from './components/shared/Navbar/Navbar1';
import SideBar from './components/shared/SideBar/SideBar';
import logo from './logo.svg';

import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar1 />
      </Router>
    </>
  );
}

export default App;
