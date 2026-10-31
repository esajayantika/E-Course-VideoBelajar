import "./CourseCard.css";
import Rate from "../molecule/Rate.jsx";
import MentorProfile from "../molecule/MentorProfile.jsx";
import Button from "../atoms/Button.jsx";

function CourseCard({ price, originalPrice, imageSrc, isAdmin, onEdit, onDelete, kelas }) {
  return (
    <article className="courses-content">
      <div className="detail-courses">
        <img className="course-img" src={imageSrc} alt="detail-courses" />
        <div className="detail-info">
          <h4 className="heading-6">{kelas}</h4>
          <p className="detail-desc body-medium-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
          <MentorProfile />
        </div>
      </div>
      <Rate price={price} originalPrice={originalPrice} />
      {isAdmin && (
        <div className="admin-action">
          <Button color="primary" variant="outline" onClick={onEdit}>
            Edit
          </Button>
          <Button color="secondary" variant="outline" onClick={onDelete}>
            Delete
          </Button>
        </div>
      )}
    </article>
  );
}

export default CourseCard;
