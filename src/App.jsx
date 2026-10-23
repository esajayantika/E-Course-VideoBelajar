import { Routes, Route } from "react-router";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import SandBox from "./Pages/SandBox.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SandBox />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
