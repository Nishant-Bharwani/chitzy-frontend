import "./App.css";
import Navbar from "./components/shared/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthForm from "./pages/AuthForms/AuthForm";
import UserProfile from "./pages/UserProfile/UserProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatSpace from "./pages/ChatSpace/ChatSpace";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/authentication" element={<AuthForm />} />
          <Route path="/:userId" element={<UserProfile />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        draggablePercent={60}
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
    </>
  );
}

export default App;
