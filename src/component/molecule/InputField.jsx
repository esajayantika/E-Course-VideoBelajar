import "./InputField.css";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

function InputField({ id, labelText, required = false, prefix, suffix, ...inputProps }) {
  return (
    <div className="input-group">
      <Label htmlFor={id} required={required}>
        {labelText}
      </Label>
      <div className="input-row">
        {prefix}
        <div className={`input-control ${suffix ? "has-suffix" : ""}`}>
          <Input id={id} required={required} {...inputProps} />
          {suffix && <div className="input-suffix">{suffix}</div>}
        </div>
      </div>
    </div>
  );
}

export default InputField;
