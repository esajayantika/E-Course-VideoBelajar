import "../styles/home.css";
import { useState } from "react";
import { useOutletContext } from "react-router";

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
import courseCollection from "../data/courseCollection.json";

function HomePage() {
  const [courses, setCourses] = useState(courseCollection);
  const { isAdmin } = useOutletContext();
  // helper read image
  const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href;
  };

  // Fungsi Tambah data dengan State
  const handleAdd = () => {
    const kelas = prompt("Kelas Baru: ", "Input kelas");
    const price = prompt("Harga Khusus baru: ", "Rp. 300K");
    if (!price || !kelas) return;
    setCourses([...courses, { id: Date.now(), kelas, price, imageSrc: imageSrc1 }]);
  };

  // Fungsi Edit data dengan state
  const handleEdit = (id) => {
    const course = courses.find((course) => course.id === id);
    const newKelas = prompt("Ubah data kelas: ", course.kelas);
    const newPrice = prompt("Ubah harga kelas: ", course.price);

    setCourses(courses.map((course) => (course.id === id ? { ...course, kelas: newKelas || course.kelas, price: newPrice || course.price } : course)));
  };

  // Fungsi hapus data dengan state
  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <>
      <HeroSec isAdmin={isAdmin} onAdd={handleAdd} />
      <section className="courses-section">
        <div className="courses-title">
          <h1 className="heading-3" style={{ lineHeight: "1.1" }}>
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <h3 className="body-medium-medium">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</h3>
        </div>
        <CourseCategory />
        <div className="courses-grid">
          {/* Read all Array courseCollection.json */}
          {courses.map((course) => (
            <CourseCard key={course.id} price={course.price} imageSrc={getImageUrl(course.imageSrc)} kelas={course.kelas} isAdmin={isAdmin} onEdit={() => handleEdit(course.id)} onDelete={() => handleDelete(course.id)} />
          ))}
        </div>
      </section>
      <ActionSection />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HomePage;
