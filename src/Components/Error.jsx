import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const Error = () => {
    return (
        <div className="container mx-auto">
            <Link to='/' >
                <div className="flex items-center gap-3 mx-48 mt-10">
                    <p><BsArrowLeft></BsArrowLeft></p>
                    <h2 className="text-2xl font-Rancho">Back to home </h2>
                </div>
            </Link>
            <div className="flex place-content-center w-9/12 mx-auto">
                <img src="https://i.ibb.co/Y8WPLPm/3747371.jpg" alt="error" />
                
            </div>
        </div>
    );
};

export default Error;