import "./HeroDetail.css";
import Rating from "../atoms/Rating";

function HeroDetail({ kelas, imageSrc }) {
  return (
    <section className="detail-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${imageSrc})` }}>
      <div className="detail-content">
        <h1 className="heading-2" style={{ lineHeight: "1.1" }}>
          {kelas}
        </h1>
        <p className="body-medium-medium" style={{ color: "var(--textlight-primary)" }}>
          Belajar bersama tutor profesional di Video Course. <br />
          Kapanpun, dimanapun.
        </p>

        <Rating light />
      </div>
    </section>
  );
}

export default HeroDetail;
