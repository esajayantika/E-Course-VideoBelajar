import "./PreviewCard.css";

function PreviewCard({ heading, children }) {
  return (
    <div className="preview-card">
      <h5 className="heading-5">{heading}</h5>
      <div className="card-group">{children}</div>
    </div>
  );
}

export default PreviewCard;
