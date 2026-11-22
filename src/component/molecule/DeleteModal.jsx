import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Button from "../atoms/Button";
import { useCourses } from "../../context/CourseContext";

function DeleteModal({ show, onHide, course }) {
  const { handleDelete } = useCourses();
  const [isSaving, setIsSaving] = useState(false);

  const onDelete = async (e) => {
    // state disable saat req delete ke mockapi
    setIsSaving(true);
    try {
      await handleDelete(course);
      onHide();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Yakin Hapus?</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ gap: "10px" }}>
        <h6>{course.kelas}</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} color="secondary" variant="solid">
          Batal
        </Button>
        <Button onClick={onDelete} disabled={isSaving}>
          Hapus
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
