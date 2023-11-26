import { Avatar } from "flowbite-react";
import { FaBed, FaHome, FaPencilRuler } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoLocationOutline, IoPricetag } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import PropertyReview from "./PropertyReview";

const PropertyInfo = ({ PropertyData }) => {
    return (
        <div className='col-span-4 flex flex-col gap-8 mt-10'>
            <div className='flex flex-col gap-2 '>
                <div>
                    <div className="flex items-center gap-4 text-red-500">
                        <FaHome className="text-xl" />
                        <p className="uppercase font-bold">Category: {PropertyData?.propertySpecifications.propertyType}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="213" height="6" viewBox="0 0 213 6" fill="none">
                        <path d="M0.385449 5.06768C70.7978 3.06405 140.806 2.7456 211.168 5.99651C213.628 6.11593 213.594 3.1304 211.168 2.98444C141.261 -1.1555 70.1407 -1.27492 0.385449 4.44403C-0.120024 4.48384 -0.136873 5.08095 0.385449 5.06768Z" fill="#F23B3B" />
                    </svg>
                </div>
                <div className='text-xl font-semibold flex flex-row items-center gap-2'>
                    <h1 className='text-4xl font-semibold font-poppins'>{PropertyData?.propertyTitle}</h1>
                </div>
                <div className='flex gap-x-36'>
                    <div className='text-xl font-semibold text-red-600 mt-3 flex gap-4 items-center'>
                        <IoPricetag className="text-xl" />
                        <p>$ {PropertyData.priceRange}</p>
                    </div>
                    <div className='text-xl font-semibold text-red-600 mt-3 flex gap-4 items-center'>
                        <IoLocationOutline className="text-xl" />
                        <p>{PropertyData.location} </p>
                    </div>
                </div>
            </div>
            <hr />
            {/* Property Description */}
            <div className='flex flex-row items-center gap-10 
              font-light text-neutral-500'>
                <div className='flex gap-2'>
                    <MdOutlineBathroom className='text-2xl' />
                    <p>Bathrooms: {PropertyData?.propertySpecifications.bathrooms}</p>
                </div>
                <div className='flex gap-2'>
                    <FaBed className='text-2xl' />
                    <p>Bedrooms: {PropertyData?.propertySpecifications.bedrooms}</p>
                </div>
                <div className='flex gap-2'>
                    <FaPencilRuler className='text-2xl' />
                    <p>Square Footage: {PropertyData?.propertySpecifications.squareFootage} Sqft</p>
                </div>
            </div>
            <h2 className='text-2xl font-semibold font-poppins border-l-4 border-red-500 pl-2'>Description:</h2>
            <div className='text-lg font-light text-neutral-500'>
                {PropertyData.propertyDescription}
            </div>
            
            <div>
                <h3 className='text-2xl font-semibold font-poppins pl-2'>Properties Details:</h3>
                <div className='m-5 space-y-2'>
                    <div className='flex gap-2 items-center'>
                        <FaCheck className='text-xl text-[#0E7490]' />
                        <p>{PropertyData?.additionalFeatures[0]} Sqft</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaCheck className='text-xl text-[#0E7490]' />
                        <p>{PropertyData?.additionalFeatures[1]} Sqft</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaCheck className='text-xl text-[#0E7490]' />
                        <p>{PropertyData?.additionalFeatures[2]} Sqft</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='text-2xl font-semibold font-poppins border-l-4 
             border-red-500 pl-2'>Give a Review:</h3>
                <PropertyReview></PropertyReview>
            </div>
        </div>
    )
};

export default PropertyInfo;