import "./PersonalCard.css";
import MentorProfile from "./MentorProfile";
import Rating from "../atoms/Rating";

function PersonalCard({ name, position, desc, company, showRating = false }) {
  return (
    <div className="personal-card">
      <MentorProfile name={name} position={position} company={company} />
      <p className="body-medium-regular" style={{ color: "var(--textdark-primary)" }}>
        {desc}
      </p>
      {showRating && <Rating />}
    </div>
  );
}

export default PersonalCard;
