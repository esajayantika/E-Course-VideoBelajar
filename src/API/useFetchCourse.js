import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";

export const useFetchCourse = () => {
  const [courses, setCourses] = useState([]);
  const [coursesIsLoading, setCoursesIsLoading] = useState(false);
  const [coursesError, setCoursesError] = useState("");

  const fetchCourses = async () => {
    try {
      setCoursesIsLoading(true);
      setCoursesError("");

      const response = await axiosInstance.get("/courseCollection");

      setCourses(response.data);
    } catch (error) {
      setCoursesError(error.message);
    } finally {
      setCoursesIsLoading(false);
    }
  };
  // panggil sekali ketika pertama mount
  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    fetchCourses,
    coursesIsLoading,
    coursesError,
    courses,
  };
};
