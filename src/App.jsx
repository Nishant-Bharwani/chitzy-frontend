import "./App.css";
import Navbar from "./components/shared/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";

import SideBar from "./components/shared/SideBar/SideBar";
import logo from "./logo.svg";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import AuthForm from "./pages/AuthForms/AuthForm";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/authentication" element={<AuthForm />} />
          <Route path="/profile" element={<UserProfile/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
