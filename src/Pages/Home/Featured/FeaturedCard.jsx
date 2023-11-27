import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const FeaturedCard = ({ properties }) => {
    const {_id, propertyTitle, priceRange, propertyImage, location} = properties;
    return (
        <>
            <div className="relative mb-12 w-full max-w-[368px] md:mr-12 
                     md:mb-0  lg:mr-14 xl:mr-16  max-h-[400px]  shadow-md"
            >
                <div className="h-1/2 overflow-hidden">
                    <img
                        src={propertyImage}
                        alt={propertyTitle} className="object-cover"
                    />
               </div>
                <div className='absolute top-3 right-3'>
                    <MdVerified className="text-2xl text-red-500" />
                </div>
                <div
                    className="absolute bottom-0  space-y-3
                        z-20 bg-slate-100 shadow p-4
                        ">
                    <h3 className="text-xl font-poppins font-semibold">{propertyTitle}</h3>
                    <div className="text-lg font-semibold flex items-center gap-2 ">
                        <IoLocationOutline className='text-lg' />
                       {location}
                    </div>
                    <div className="flex justify-between bottom-0 ">
                        <p className="text-red-600 text-lg font-bold">$ {priceRange}</p>
                        <Link to={`/property-details/${_id}`} >
                            <p className="
                         bg-red-500 p-2 text-white flex place-content-center"><FaArrowRight /></p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedCard;