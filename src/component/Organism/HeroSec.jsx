import "./HeroSec.css";
import Button from "../atoms/Button";

function HeroSec() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="heading-1" style={{ textAlign: "center", lineHeight: "1.1" }}>
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
        </h1>
        <p className="body-medium-medium" style={{ color: "var(--textlight-primary)", textAlign: "center" }}>
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman anda
        </p>
        <Button className="hero-button">Temukan Video Course Untuk Dipelajari!</Button>
      </div>
    </section>
  );
}

export default HeroSec;
