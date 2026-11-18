import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useEditCourse = () => {
  const [editCoursesIsLoading, setEditCoursesIsLoading] = useState(false);
  const [editCoursesError, setEditCoursesError] = useState("");

  const editCourse = async (id, data) => {
    try {
      setEditCoursesIsLoading(true);
      setEditCoursesError("");

      await axiosInstance.put(`/courseCollection/${id}`, data);
    } catch (error) {
      setEditCoursesError(error.message);
    } finally {
      setEditCoursesIsLoading(false);
    }
  };

  return {
    editCourse,
    editCoursesIsLoading,
    editCoursesError,
  };
};
