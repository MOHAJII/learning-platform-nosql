import { useEffect, useState } from 'react';
import { deleteCourse, listCourses } from '../services/CourseService';
import { useNavigate } from 'react-router-dom';

const ListCoursesComponent = () => {
    const navigator = useNavigate();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        listCourses().then((response) => {
            setCourses(response.data);
            console.log("list courses");
            
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const addCourse = () => {
        navigator('/add-course');
    }

    const handleUpdate = (id) => {
        
    }

    const handleDelete = (id) => {
        alert("Course will deleted");
        deleteCourse(id).then(() => { console.log("Course deleted");
        });
    }

    return (
        <div>
            <div className="mx-40">
                <div className='w-full flex justify-end mt-3'>
                <button className='bg-blue-700 text-white px-2 py-1 rounded-xl border font-bold hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 transition-all duration-200 ease-in' onClick={addCourse}>Add course</button>

                </div>
                <table className="w-full mx-auto mt-4btn border-t-cyan-700  border-collapse border border-slate-500 text-center">
                    <caption className="caption-top">
                        All courses
                    </caption>
                    <thead className="">
                        <tr>
                            <th className="table-borders">Course ID</th>
                            <th className="table-borders">Course Name</th>
                            <th className="table-borders">Description</th>
                            <th className="table-borders">Price</th>
                            <th className="table-borders">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(course => (
                                <tr key={course._id}>
                                    <td className="table-borders">{course._id}</td>
                                    <td className="table-borders">{course.name}</td>
                                    <td className="table-borders">{course.description}</td>
                                    <td className="table-borders">{course.price}</td>
                                    <td className='table-borders p-1 text-white font-bold'><button className='border-1 bg-green-800 mr-1 px-2 py-1 rounded-md hover:scale-90 hover:border-1 hover:border-green-800 hover:bg-white hover:text-green-800'>update</button><button className='border-1 bg-red-800 mr-1 px-2 py-1 rounded-md hover:scale-90 hover:border-1 hover:border-red-800 hover:bg-white hover:text-red-800'>delete</button></td>
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