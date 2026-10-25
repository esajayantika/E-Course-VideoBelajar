import { Routes, Route } from "react-router";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import MainLayout from "./Pages/MainLayout.jsx";
import Navbar from "./component/molecule/Navbar.jsx";
import Navhome from "./component/molecule/Navhome.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout navbar={<Navbar />} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<MainLayout navbar={<Navhome />} />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
