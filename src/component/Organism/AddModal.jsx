import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Button from "../atoms/Button";
import InputField from "../molecule/InputField";
import Label from "../atoms/Label";
import { useCourses } from "../../context/CourseContext";

function AddModal({ show, onHide }) {
  const { handleAdd } = useCourses();
  const [kelas, setKelas] = useState("");
  const [price, setPrice] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState({});

  // Pengecekan agar form semuanya wajib diisi
  const checkForm = () => {
    const newErrors = {};

    if (!kelas.trim()) newErrors.kelas = "Nama Kelas wajib diisi!";
    if (!price.trim()) newErrors.price = "Harga wajib diisi!";
    if (!deskripsi.trim()) newErrors.deskripsi = "Deskripsi Kelas wajib diisi!";

    setErrors(newErrors);

    // kalau ada isinya kembailkan nilai true
    return Object.keys(newErrors).length === 0;
  };

  const onAdd = async (e) => {
    e.preventDefault();

    // jangan lanjutkan proses kalau bernilai false (modal tertahan)
    if (!checkForm()) return;

    // state disable saat req add ke mockapi
    setIsSaving(true);
    try {
      await handleAdd({ kelas, price, deskripsi });
      onHide();
    } finally {
      setIsSaving(false);
    }
  };
  //   Mereset Isi form saat user membatalkan Add dan membuka modalnya lagi
  useEffect(() => {
    // kalau dibuka tampilin data kosong kalau tidak/close ga ngapa2in
    if (show) {
      setKelas("");
      setPrice("");
      setDeskripsi("");
      setErrors({});
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Kelas</Modal.Title>
      </Modal.Header>

      <form onSubmit={onAdd}>
        <Modal.Body style={{ gap: "10px" }}>
          <InputField
            labelText="Nama Kelas"
            id="NamaKelas"
            value={kelas}
            placeholder="Contoh: Algoritma Pemrograman"
            onChange={(e) => {
              setKelas(e.target.value);
              if (errors.kelas) setErrors((prev) => ({ ...prev, kelas: "" }));
            }}
            error={errors.kelas}
          />
          <InputField
            labelText="Harga Kelas"
            id="HargaKelas"
            value={price}
            placeholder="Contoh : Rp. xxx"
            onChange={(e) => {
              setPrice(e.target.value);
              if (errors.price) setErrors((prev) => ({ ...prev, price: "" }));
            }}
            error={errors.price}
          />
          <div className="textarea-group">
            <Label htmlFor="Desc"> Deskripsi Kelas</Label>
            <textarea
              name="deskripsi"
              id="Desc"
              value={deskripsi}
              placeholder="Input deskripsi kelas..."
              onChange={(e) => {
                setDeskripsi(e.target.value);
                if (errors.deskripsi) setErrors((prev) => ({ ...prev, deskripsi: "" }));
              }}
            ></textarea>
            {errors.deskripsi && <span style={{ display: "block", color: "red", fontSize: "12px", marginTop: "2px" }}>{errors.deskripsi}</span>}
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

export default AddModal;
