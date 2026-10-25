import "./Input.css";

function Input({ className = "", ...props }) {
  return <input {...props} className={`input-atom ${className}`} />;
}

export default Input;
