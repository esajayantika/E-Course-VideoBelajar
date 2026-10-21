import "./Button.css";

function Button({ children, color = "primary", variant = "solid", fullWidth = false, prefix, ...props }) {
  return (
    <button
      {...props}
      className={`btn-app body-medium-bold 
      is-${color} 
      is-${variant} 
      ${fullWidth ? "is-full" : ""} 
      ${prefix ? "prefix" : ""}`}
    >
      {prefix && <span className="btn-prefix">{prefix}</span>}
      {children}
    </button>
  );
}

export default Button;
