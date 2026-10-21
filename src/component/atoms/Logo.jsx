import "./Logo.css";
import logo from "../../assets/Logo.svg";

function Logo(props) {
  return (
    <div className={`logo ${props.className || ""}`} {...props}>
      <img src={logo} alt="logo-course" />
    </div>
  );
}

export default Logo;
