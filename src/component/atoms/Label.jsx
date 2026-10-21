import "./Label.css";

function Label({ children, required = false, ...props }) {
  return (
    <label className={`label-atom body-medium-regular ${required ? "is-required" : ""}`} {...props}>
      {children}
    </label>
  );
}

export default Label;
