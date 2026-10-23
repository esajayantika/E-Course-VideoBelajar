import "./MentorProfile.css";
import Profile from "../../assets/HomeAsset/Avatar.svg";

function MentorProfile() {
  return (
    <div className="mentor">
      <img className="mentor-img" src={Profile} alt="profile-mentor" />
      <div className="detail-mentor">
        <h5 className="body-medium-medium">Jenna Ortega</h5>
        <p className="body-small-regular">
          Senior Accountant{" "}
          <span className="mentor-company">
            di <strong>Gojek</strong>
          </span>
        </p>
      </div>{" "}
    </div>
  );
}

export default MentorProfile;
