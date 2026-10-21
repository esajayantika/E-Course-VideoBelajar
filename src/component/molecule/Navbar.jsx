import "./Navbar.css";
import Logo from "../atoms/Logo.jsx";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      <div className="navbar-right">{children}</div>
    </nav>
  );
}

export default Navbar;
