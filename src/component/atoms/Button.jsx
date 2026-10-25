import "./Button.css";

function Button({ children, type = "button", color = "primary", variant = "solid", fullWidth = false, prefix, className = "", ...props }) {
  return (
    <button
      type={type}
      {...props}
      className={`btn-app body-medium-bold 
      is-${color} 
      is-${variant} 
      ${fullWidth ? "is-full" : ""} 
      ${prefix ? "prefix" : ""}
      ${className}`}
    >
      {prefix && <span className="btn-prefix">{prefix}</span>}
      {children}
    </button>
  );
}

export default Button;
