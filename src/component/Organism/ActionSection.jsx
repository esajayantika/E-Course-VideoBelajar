import "./ActionSection.css";
import Input from "../atoms/Input.jsx";
import Button from "../atoms/Button.jsx";

function ActionSection() {
  return (
    <section className="action-section">
      <div className="action-content">
        <div className="action-desc">
          <p className="body-lage-medium" style={{ color: "var(--textlight-secondary)" }}>
            NEWSLETTER
          </p>
          <h3 className="heading-3" style={{ color: "var(--textlight-primary)", textAlign: "center", lineHeight: "1.1" }}>
            Mau Belajar Lebih Banyak?
          </h3>
          <p className="body-medium-regular" style={{ color: "var(--textlight-primary)", textAlign: "center" }}>
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com
          </p>
        </div>
        <div className="action-input">
          <Input className="action-field" placeholder="Masukkan Emailmu" />
          <Button color="secondary" variant="solid" className="action-btn">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ActionSection;
