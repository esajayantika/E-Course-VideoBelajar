import "./HeroDetail.css";
import Rating from "../atoms/Rating";
import { useCourses } from "../../context/CourseContext";
import { useParams } from "react-router";

function HeroDetail() {
  const { id } = useParams();
  const { courses, coursesIsLoading } = useCourses();
  const course = courses.find((kelas) => kelas.id === id);

  if (coursesIsLoading || !course) return <p>Loading....</p>;
  return (
    <section className="detail-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${course.imageSrc})` }}>
      <div className="detail-content">
        <h1 className="heading-2" style={{ lineHeight: "1.1" }}>
          {course.kelas}
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
