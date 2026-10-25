import "./Input.css";
import { forwardRef } from "react";

const Input = forwardRef(function Input({ className = "", ...props }, ref) {
  return <input ref={ref} {...props} className={`input-atom ${className}`} />;
});

export default Input;
