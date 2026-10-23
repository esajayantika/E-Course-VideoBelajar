import "./Rate.css";
import Rating from "../atoms/Rating.jsx";
import Price from "../atoms/Price.jsx";

function Rate({ price, originalPrice }) {
  return (
    <div className="rate-content">
      <Rating />
      <Price price={price} originalPrice={originalPrice} />
    </div>
  );
}

export default Rate;
