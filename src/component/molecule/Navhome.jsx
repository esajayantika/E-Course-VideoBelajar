import Navbar from "./Navbar.jsx";
import "./Navhome.css";
import user from "../../assets/Avatar.svg";

function Navhome({ isAdmin, onToggleAdmin }) {
  return (
    <Navbar>
      <button className="user-name body-medium-medium" onClick={onToggleAdmin}>
        {isAdmin ? "Admin" : "Visitor"}
      </button>
      <button className="burger-menu" aria-label="Toggle Menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <img className="user-icon" src={user} alt="user-icon"></img>
    </Navbar>
  );
}

export default Navhome;
