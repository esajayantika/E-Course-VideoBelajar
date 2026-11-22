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
  const { editCourse, editCoursesError } = useEditCourse();
  const { deleteCourse, deleteCourseError } = useDeleteCourse();

  // Fungsi Tambah data dengan custom hook
  const handleAdd = async (newData) => {
    await createCourses({ price: newData.price, kelas: newData.kelas, imageSrc: imageSrc1, Deskripsi: newData.deskripsi });
    await fetchCourses();
  };

  // Fungsi Edit data dengan custom hook
  const handleEdit = async (course, newData) => {
    await editCourse(course.id, {
      ...course,
      // ambil nilai yang ingin di edit untuk diupdate, atau pakai data lama
      kelas: newData.kelas || course.kelas,
      price: newData.price || course.price,
      Deskripsi: newData.deskripsi || course.Deskripsi,
    });
    await fetchCourses();
  };

  // Fungsi hapus data dengan custom hook
  const handleDelete = async (course) => {
    await deleteCourse(course.id);
    await fetchCourses();
  };

  return <CourseContext.Provider value={{ courses, coursesIsLoading, coursesError, handleAdd, handleDelete, handleEdit }}>{children}</CourseContext.Provider>;
}

export const useCourses = () => useContext(CourseContext);
