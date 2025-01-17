import { useEffect, useState } from 'react';
import { listCourses } from '../services/CourseService';
import { useNavigate } from 'react-router-dom';

const ListCoursesComponent = () => {
    const navigator = useNavigate();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        listCourses().then((response) => {
            setCourses(response.data);
            console.log("courses");
            
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const addCourse = () => {
        navigator('/add-course');
    }

    return (
        <div>
            <div className="mx-40">
                <div className='w-full flex justify-end mt-3'>
                <button className='bg-blue-700 text-white px-2 py-1 rounded-xl border font-bold hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 transition-all duration-200 ease-in' onClick={addCourse}>Add course</button>

                </div>
                <table className="w-full mx-auto mt-4btn border-t-cyan-700  border-collapse border border-slate-500">
                    <caption className="caption-top">
                        All courses
                    </caption>
                    <thead className="">
                        <tr>
                            <th className="table-borders">Course ID</th>
                            <th className="table-borders">Course Name</th>
                            <th className="table-borders">Description</th>
                            <th className="table-borders">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(course => (
                                <tr key={course.id}>
                                    <td className="table-borders">{course.id}</td>
                                    <td className="table-borders">{course.name}</td>
                                    <td className="table-borders">{course.description}</td>
                                    <td className="table-borders">{course.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListCoursesComponent