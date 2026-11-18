import "../styles/home.css";
import { useState } from "react";
import { useOutletContext } from "react-router";

import HeroSec from "../component/Organism/HeroSec.jsx";
import CourseCategory from "../component/molecule/CourseCategory.jsx";
import CourseCard from "../component/Organism/CourseCard.jsx";
import ActionSection from "../component/Organism/ActionSection.jsx";
import Footer from "../component/Organism/Footer.jsx";
import { useCourses } from "../context/CourseContext.jsx";

function HomePage() {
  const { isAdmin } = useOutletContext();
  const { courses, coursesIsLoading, coursesError } = useCourses();

  return (
    <>
      <HeroSec isAdmin={isAdmin} />
      <section className="courses-section">
        <div className="courses-title">
          <h1 className="heading-3" style={{ lineHeight: "1.1" }}>
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <h3 className="body-medium-medium">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</h3>
        </div>
        <CourseCategory />
        <div className="courses-grid">
          {/* Read all Array from MockApi */}
          {/* Handle loading hanya muncul ketika aray masih kosong/refresh pertama */}
          {coursesIsLoading && courses.length === 0 && <p>Loading...</p>}
          {coursesError && <p style={{ color: "red" }}>{coursesError}</p>}
          {courses.map((course) => (
            <CourseCard course={course} key={course.id} isAdmin={isAdmin} name={"Jenna Ortega"} position={"Senior Accountant"} company={"Gojek"} />
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
