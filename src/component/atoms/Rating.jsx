import "./Rating.css";
import Star from "../../assets/HomeAsset/Star.svg";
import HalfStar from "../../assets/HomeAsset/MaskedStar.svg";
import BlankStar from "../../assets/HomeAsset/BlankStar.svg";

function Rating() {
  return (
    <div className="rating">
      <div className="stars">
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={HalfStar} alt="half-star" />
        <img src={BlankStar} alt="blank-star" />
        <img src={BlankStar} alt="blank-star" />
      </div>
      <span className="rating-score">3.5 (86)</span>
    </div>
  );
}

export default Rating;
