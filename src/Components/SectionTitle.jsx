import { FaHome } from "react-icons/fa";

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <>
            <div className="flex items-center gap-4 text-red-500">
                <FaHome className="text-xl" />
                <p className="uppercase font-bold">{subHeading}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="213" height="6" viewBox="0 0 213 6" fill="none">
                <path d="M0.385449 5.06768C70.7978 3.06405 140.806 2.7456 211.168 5.99651C213.628 6.11593 213.594 3.1304 211.168 2.98444C141.261 -1.1555 70.1407 -1.27492 0.385449 4.44403C-0.120024 4.48384 -0.136873 5.08095 0.385449 5.06768Z" fill="#F23B3B" />
            </svg>
            <h1 className="mt-2 mb-12 text-5xl font-bold font-poppins tracking-tight md:text-5xl ">
                {heading}</h1>

        </>
    );
};

export default SectionTitle;