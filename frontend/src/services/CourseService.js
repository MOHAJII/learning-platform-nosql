import axios from "axios";

const REST_API_BASE_URL = "http://localhost:3000/api/courses/";

export const listCourses = () => axios.get(REST_API_BASE_URL);

