import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useDeleteCourse = () => {
  const [deleteCourseIsLoading, setDeleteCourseIsLoading] = useState(false);
  const [deleteCourseError, setDeleteCourseError] = useState("");

  const deleteCourse = async (id) => {
    try {
      setDeleteCourseIsLoading(true);
      setDeleteCourseError("");

      await axiosInstance.delete(`/courseCollection/${id}`);
    } catch (error) {
      setDeleteCourseError(error.message);
    } finally {
      setDeleteCourseIsLoading(false);
    }
  };

  return {
    deleteCourse,
    deleteCourseIsLoading,
    deleteCourseError,
  };
};
