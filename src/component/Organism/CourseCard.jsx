import "./CourseCard.css";
import Rate from "../molecule/Rate.jsx";
import MentorProfile from "../molecule/MentorProfile.jsx";

function CourseCard({ price, originalPrice, imageSrc }) {
  return (
    <article className="courses-content">
      <div className="detail-courses">
        <img className="course-img" src={imageSrc} alt="detail-courses" />
        <div className="detail-info">
          <h4 className="heading-6">Big 4 Auditor Financial Analyst</h4>
          <p className="detail-desc body-medium-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
          <MentorProfile />
        </div>
      </div>
      <Rate price={price} originalPrice={originalPrice} />
    </article>
  );
}

export default CourseCard;
