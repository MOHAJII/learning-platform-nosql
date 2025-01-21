import axios from "axios";

const REST_API_BASE_URL = "http://localhost:3000/api/courses/";

export const listCourses = () => axios.get(REST_API_BASE_URL);
export const addCourses = (course) => axios.post(REST_API_BASE_URL, course);
export const deleteCourse = (id) => axios.delete(REST_API_BASE_URL, id);

