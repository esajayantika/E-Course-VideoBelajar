import { forwardRef } from "react";
import "./InputField.css";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const InputField = forwardRef(function InputField({ id, labelText, required = false, prefix, suffix, error, ...inputProps }, ref) {
  return (
    <div className="input-group">
      <Label htmlFor={id} required={required}>
        {labelText}
      </Label>
      <div className="input-row">
        {prefix}
        <div className={`input-control ${suffix ? "has-suffix" : ""}`}>
          <Input id={id} ref={ref} {...inputProps} />
          {suffix && <div className="input-suffix">{suffix}</div>}
        </div>
      </div>
      {error && <span style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{error}</span>}
    </div>
  );
});

export default InputField;
