import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "./Modal.css";
import Button from "../atoms/Button";
import InputField from "../molecule/InputField";
import Label from "../atoms/Label";
import { useCourses } from "../../context/CourseContext";

function EditModal({ show, onHide, course }) {
  const { handleEdit } = useCourses();
  const [kelas, setKelas] = useState(course.kelas);
  const [price, setPrice] = useState(course.price);
  const [deskripsi, setDeskripsi] = useState(course.Deskripsi);
  const [isSaving, setIsSaving] = useState(false);

  const onEdit = async (e) => {
    e.preventDefault();
    // state disable saat req edit ke mockapi
    setIsSaving(true);
    try {
      await handleEdit(course, { kelas, price, deskripsi });
      onHide();
    } finally {
      setIsSaving(false);
    }
  };
  //   Mereset Isi form saat user membatalkan Edit dan membuka modalnya lagi
  useEffect(() => {
    // kalau dibuka tampilin data course kalau tidak/close ga ngapa2in
    if (show) {
      setKelas(course.kelas);
      setPrice(course.price);
      setDeskripsi(course.Deskripsi);
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Kelas</Modal.Title>
      </Modal.Header>

      <form onSubmit={onEdit}>
        <Modal.Body style={{ gap: "10px" }}>
          <InputField labelText="Nama Kelas" id="NamaKelas" value={kelas} onChange={(e) => setKelas(e.target.value)} />
          <InputField labelText="Harga Kelas" id="HargaKelas" value={price} onChange={(e) => setPrice(e.target.value)} />
          <div className="textarea-group">
            <Label htmlFor="Desc"> Deskripsi Kelas</Label>
            <textarea name="deskripsi" id="Desc" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} color="secondary" variant="solid">
            Batal
          </Button>
          <Button type="submit" disabled={isSaving}>
            Simpan
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default EditModal;
