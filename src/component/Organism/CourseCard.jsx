import { useState } from "react";
import "./CourseCard.css";
import Rate from "../molecule/Rate.jsx";
import MentorProfile from "../molecule/MentorProfile.jsx";
import Button from "../atoms/Button.jsx";
import { useCourses } from "../../context/CourseContext.jsx";

function CourseCard({ originalPrice, isAdmin, name, position, company, course }) {
  const { handleDelete, handleEdit, editCoursesIsLoading, deleteCourseIsLoading } = useCourses();
  const [editActiveId, setEditActiveId] = useState("");
  const [deleteActiveId, setDeleteActiveId] = useState("");

  const onEdit = async () => {
    // menginisiasi id yang sedang di edit untuk penentuan state disable saat req edit ke mockapi
    setEditActiveId(course.id);
    try {
      await handleEdit(course);
    } finally {
      setEditActiveId("");
    }
  };
  const onDelete = async () => {
    // penjaga supaya gabisa gasengaja pencet delete
    const konfirmasi = confirm("Yakin delete kelas ini?");
    if (konfirmasi === false) {
      return;
    }
    // menginisiasi id yang sedang di delete untuk penentuan state disable saat req delete ke mockapi
    setDeleteActiveId(course.id);
    try {
      await handleDelete(course.id);
    } finally {
      setDeleteActiveId("");
    }
  };

  const isDisabledEdit = editCoursesIsLoading && editActiveId === course.id;
  const isDisabledDelete = deleteCourseIsLoading && deleteActiveId === course.id;

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
      {isAdmin && (
        <div className="admin-action">
          <Button color="primary" variant="outline" onClick={onEdit} disabled={isDisabledEdit}>
            Edit
          </Button>
          <Button color="secondary" variant="outline" onClick={onDelete} disabled={isDisabledDelete}>
            Delete
          </Button>
        </div>
      )}
    </article>
  );
}

export default CourseCard;
