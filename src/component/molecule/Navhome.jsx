import Navbar from "./Navbar.jsx";
import "./Navhome.css";
import user from "../../assets/Avatar.svg";

function Navhome() {
  return (
    <Navbar>
      <button className="burger-menu" aria-label="Toggle Menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="user-name body-medium-medium">Kategori</div>
      <img className="user-icon" src={user} alt="user-icon"></img>
    </Navbar>
  );
}

export default Navhome;
