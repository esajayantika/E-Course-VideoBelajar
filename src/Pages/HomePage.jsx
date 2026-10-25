import "../styles/home.css";

import imageSrc1 from "../assets/HomeAsset/auditorcontent1.jpg";
import imageSrc2 from "../assets/HomeAsset/auditorcontent2.jpg";
import imageSrc3 from "../assets/HomeAsset/auditorcontent3.jpg";
import imageSrc4 from "../assets/HomeAsset/auditorcontent4.jpg";
import imageSrc5 from "../assets/HomeAsset/auditorcontent5.jpg";
import imageSrc6 from "../assets/HomeAsset/auditorcontent6.jpg";
import imageSrc7 from "../assets/HomeAsset/auditorcontent7.jpg";
import imageSrc8 from "../assets/HomeAsset/auditorcontent8.jpg";
import imageSrc9 from "../assets/HomeAsset/auditorcontent9.jpg";

import HeroSec from "../component/Organism/HeroSec.jsx";
import CourseCategory from "../component/molecule/CourseCategory.jsx";
import CourseCard from "../component/Organism/CourseCard.jsx";
import ActionSection from "../component/Organism/ActionSection.jsx";
import Footer from "../component/Organism/Footer.jsx";

function HomePage() {
  return (
    <>
      <main>
        <HeroSec />
        <section className="courses-section">
          <div className="courses-title">
            <h1 className="heading-3" style={{ lineHeight: "1.1" }}>
              Koleksi Video Pembelajaran Unggulan
            </h1>
            <h3 className="body-medium-medium">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</h3>
          </div>
          <CourseCategory />
          <div className="courses-grid">
            <CourseCard price="Rp. 300K" imageSrc={imageSrc1} />
            <CourseCard price="Rp. 300K" imageSrc={imageSrc2} />
            <CourseCard price="Rp. 300K" imageSrc={imageSrc3} />
            <CourseCard price="Rp. 300K" imageSrc={imageSrc4} />
            <CourseCard price="Rp. 300K" imageSrc={imageSrc5} />
            <CourseCard price="Rp. 300K" imageSrc={imageSrc6} />
            <CourseCard price="Rp. 300K" imageSrc={imageSrc7} />
            <CourseCard price="Rp. 300K" imageSrc={imageSrc8} />
            <CourseCard price="Rp. 300K" imageSrc={imageSrc9} />
          </div>
        </section>
        <ActionSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HomePage;
