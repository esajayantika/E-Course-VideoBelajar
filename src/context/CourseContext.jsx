import { createContext, useContext } from "react";
import { useFetchCourse } from "../API/useFetchCourse";
import { useCreateCourse } from "../API/useCreateCourse";
import { useEditCourse } from "../API/useEditCourse";
import { useDeleteCourse } from "../API/useDeleteCourse";
import imageSrc1 from "/courses/auditorcontent1.jpg";

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const { courses, coursesIsLoading, coursesError, fetchCourses } = useFetchCourse();
  const { createCourses, createCoursesIsLoading, createCoursesError } = useCreateCourse();
  const { editCourse, editCoursesIsLoading, editCoursesError } = useEditCourse();
  const { deleteCourse, deleteCourseIsLoading, deleteCourseError } = useDeleteCourse();

  // Fungsi Tambah data dengan custom hook
  const handleAdd = async () => {
    const kelas = prompt("Kelas Baru: ", "Input kelas");
    const price = prompt("Harga Khusus baru: ", "Rp. 300K");
    const Deskripsi = prompt("Deskripsi Kelas: ", "input desc...");
    if (!price || !kelas || !Deskripsi) return;
    await createCourses({ price, kelas, imageSrc: imageSrc1, Deskripsi });
    await fetchCourses();
  };

  // Fungsi Edit data dengan custom hook
  const handleEdit = async (course) => {
    const newKelas = prompt("Ubah data kelas: ", course.kelas);
    const newPrice = prompt("Ubah harga kelas: ", course.price);
    const newDesc = prompt("Ubah deskripsi kelas: ", course.Deskripsi);

    // Kalau cancel -> prompt null
    if (newKelas === null || newPrice === null || newDesc === null) return;

    await editCourse(course.id, {
      ...course,
      // ambil nilai yang ingin di edit untuk diupdate, atau pakai data lama
      kelas: newKelas || course.kelas,
      price: newPrice || course.price,
      Deskripsi: newDesc || course.Deskripsi,
    });
    await fetchCourses();
  };

  // Fungsi hapus data dengan custom hook
  const handleDelete = async (id) => {
    await deleteCourse(id);
    await fetchCourses();
  };

  return <CourseContext.Provider value={{ courses, coursesIsLoading, coursesError, editCoursesIsLoading, deleteCourseIsLoading, handleAdd, handleDelete, handleEdit }}>{children}</CourseContext.Provider>;
}

export const useCourses = () => useContext(CourseContext);
