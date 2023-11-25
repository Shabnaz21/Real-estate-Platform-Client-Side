import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const FeaturedCard = () => {
    return (
        <>
            <div className="max-w-7xl mt-10">
                <div className="relative mb-12 w-full max-w-[368px] md:mr-12 
                     md:mb-0  lg:mr-14 xl:mr-16 overflow-hidden max-h-[490px] shadow-md"
                ><img
                        src='https://www.compass.com/m/f8a5974feb0aa89fae0fbc9219794c4624362349_img_0_59cc4/origin.jpg'
                        alt="image" className="object-cover"
                    />
                    <div
                        className="absolute bottom-0  space-y-3
                        z-20 bg-white shadow sm:p-4
                        ">
                        <h3>Property Name</h3>
                        <div className="text-sm font-semibold flex items-center gap-2 text-gray-500">
                            <IoLocationOutline className='text-lg' />
                            Location
                        </div>
                        <div className="flex  justify-between bottom-0 ">
                            <p className="text-red-600 font-bold">$ Price</p>
                            <p className="
                         bg-red-500 p-2 text-white w-1/2 flex place-content-center"><FaArrowRight/></p>
                        </div>
                    </div>
                </div>

            </div> 
        </>
    );
};

export default FeaturedCard;