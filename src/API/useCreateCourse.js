import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useCreateCourse = () => {
  const [createCoursesIsLoading, setCreateCoursesIsLoading] = useState(false);
  const [createCoursesError, setCreateCoursesError] = useState("");

  const createCourses = async ({ price, kelas, imageSrc, Deskripsi }) => {
    try {
      setCreateCoursesIsLoading(true);
      setCreateCoursesError("");

      await axiosInstance.post("/courseCollection", { price, kelas, imageSrc, Deskripsi });
    } catch (error) {
      setCreateCoursesError(error.message);
    } finally {
      setCreateCoursesIsLoading(false);
    }
  };

  return {
    createCourses,
    createCoursesIsLoading,
    createCoursesError,
  };
};
