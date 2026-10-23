import "./Price.css";

function Price({ price, originalPrice }) {
  return (
    <div className="price-wrapper">
      {originalPrice && (
        <span className="body-small-bold" style={{ color: "var(--main-tertiary)", textDecoration: "line-through" }}>
          {originalPrice}
        </span>
      )}
      <h5 className="heading-6" style={{ paddingRight: "var(--gap-lg)", color: "var(--main-primary)" }}>
        {price}
      </h5>
    </div>
  );
}

export default Price;
