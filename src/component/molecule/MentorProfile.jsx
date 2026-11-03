import "./MentorProfile.css";
import Profile from "../../assets/HomeAsset/Avatar.svg";

function MentorProfile({ name, position, company }) {
  return (
    <div className="mentor">
      <img className="mentor-img" src={Profile} alt="profile-mentor" />
      <div className="detail-mentor">
        <h5 className="body-medium-medium">{name}</h5>
        <p className="body-small-regular">
          {position}
          {company && (
            <span className="mentor-company">
              {" "}
              di <strong>{company}</strong>
            </span>
          )}
        </p>
      </div>{" "}
    </div>
  );
}

export default MentorProfile;
