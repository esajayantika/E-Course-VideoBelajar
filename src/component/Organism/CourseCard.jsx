import { useState } from "react";
import { useNavigate } from "react-router";
import "./CourseCard.css";
import Rate from "../molecule/Rate.jsx";
import MentorProfile from "../molecule/MentorProfile.jsx";
import Button from "../atoms/Button.jsx";
import EditModal from "./EditModal.jsx";
import DeleteModal from "../molecule/DeleteModal.jsx";

function CourseCard({ originalPrice, isAdmin, name, position, company, course }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const navigate = useNavigate();

  return (
    <article className="courses-content">
      <div className="detail-courses">
        <img className="course-img" src={course.imageSrc} alt="detail-courses" />
        <div className="detail-info">
          <h4 className="heading-6">{course.kelas}</h4>
          <p className="detail-desc body-medium-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
          <MentorProfile name={name} position={position} company={company} />
        </div>
      </div>
      <Rate price={course.price} originalPrice={originalPrice} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => {
            navigate(`/detail/${course.id}/${encodeURIComponent(course.kelas)}`);
          }}
        >
          Detail Course
        </Button>
        {isAdmin && (
          <div className="admin-action">
            <Button color="primary" variant="outline" onClick={() => setShowEdit(true)}>
              Edit
            </Button>
            {/* modal set hidden sebelum klik */}
            <EditModal show={showEdit} onHide={() => setShowEdit(false)} course={course} />
            <Button color="secondary" variant="outline" onClick={() => setShowDelete(true)}>
              Delete
            </Button>
            <DeleteModal show={showDelete} onHide={() => setShowDelete(false)} course={course} />
          </div>
        )}
      </div>
    </article>
  );
}

export default CourseCard;
