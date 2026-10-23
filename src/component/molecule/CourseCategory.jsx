import "./CourseCategory.css";

function CourseCategory() {
  return (
    <div className="courses-category">
      <button className="category body-medium-medium active">Semua Kelas</button>
      <button className="category body-medium-medium">Pemasaran</button>
      <button className="category body-medium-medium">Desain</button>
      <button className="category body-medium-medium">Pengembangan Diri</button>
      <button className="category body-medium-medium">Bisnis</button>
    </div>
  );
}

export default CourseCategory;
