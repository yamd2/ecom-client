import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NewAccVerify } from "./pages/verify/NewAccVerify";
import Dashboard from "./pages/dashbord/Dashboard";
import ResetPassword from "./pages/reset-password/ResetPassword";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          {/* Public router */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* private router */}

          <Route path="register" element={<RegisterPage />} />
          <Route path="verify" element={<NewAccVerify />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
