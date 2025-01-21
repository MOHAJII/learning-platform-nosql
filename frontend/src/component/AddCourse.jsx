import { useNavigate } from 'react-router-dom';
import { addCourses } from '../services/CourseService';

const AddCourse = () => {
    const navigator = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const course = {};
        course.name = formData.get("name");
        course.description = formData.get("description");
        course.price = formData.get("price");
        addCourses(course).then(() => { console.log("Course added");
        })
        navigator('/employees');
    };

    return (
        <div className="w-100 flex flex-row justify-center items-center mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col w-200 border-2 p-4 justify-center items-center">
                <label className="mt-2">Course Name</label>
                <input type="text" name="name" className="border-b-2 border-black"/>
                <label className="mt-2">Description</label>
                <input type="text" name="description" className="border-b-2 border-black"/>
                <label className="mt-2">Price</label>
                <input type="text" name="price" className="border-b-2 border-black"/>
                <button type="submit" className="mt-5 py-2 px-4 max-w-20 bg-black border-2 text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black">Send</button>
            </form>
        </div>
    );
}

export default AddCourse;