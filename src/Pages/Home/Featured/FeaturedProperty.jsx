import SectionTitle from "../../../Components/SectionTitle";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "flowbite-react";

const FeaturedProperty = () => {
    return (
        <section className="container mt-10  xl:mx-auto">
            <div className="mx-10">
                <SectionTitle
                    subHeading={'Tending'}
                    heading={'Featured Properties'}
                ></SectionTitle>
                <p className="mt-4 text-xl">Find your suitable house here and stay safe and relax with pleasure</p>
            </div>
            <div className="lg:max-w-8xl mt-10 grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 mx-4 xl:mx-auto ">
                <div className="relative mb-12 w-full max-w-[368px] md:mr-12 
                     md:mb-0  lg:mr-14 xl:mr-16 overflow-hidden xl:max-h-[420px] max-h-[400px]  shadow-md"
                ><img
                        // src='https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg'
                        src='https://photos.zillowstatic.com/fp/a4998c02c5f2eea23396eede4a55ab1f-cc_ft_1536.jpg'
                        alt="image" className="object-cover"
                    />
                    <div
                        className="absolute bottom-0  space-y-3
                        z-20 bg-white shadow p-4
                        ">
                        <h3>Property Name</h3>
                        <div className="text-sm font-semibold flex items-center gap-2 text-gray-500">
                            <IoLocationOutline className='text-lg' />
                            Location
                        </div>
                        <div className="flex  justify-between bottom-0 ">
                            <p className="text-red-600 font-bold">$ Price</p>
                            <p className="
                         bg-red-500 p-2 text-white w-1/2 flex place-content-center"><FaArrowRight /></p>
                        </div>
                    </div>
                </div>
                <div className="relative mb-12 w-full max-w-[368px] md:mr-12 
                     md:mb-0  lg:mr-14 xl:mr-16 overflow-hidden max-h-[420px] shadow-md"
                ><img
                        src='https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg'
                        // src='https://photos.zillowstatic.com/fp/a4998c02c5f2eea23396eede4a55ab1f-cc_ft_1536.jpg'
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
                         bg-red-500 p-2 text-white w-1/2 flex place-content-center"><FaArrowRight /></p>
                        </div>
                    </div>
                </div>
                <div className="relative mb-12 w-full max-w-[368px] md:mr-12 
                     md:mb-0  lg:mr-14 xl:mr-16 overflow-hidden max-h-[420px] shadow-md"
                ><img
                        // src='https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg'
                        src='https://photos.zillowstatic.com/fp/a4998c02c5f2eea23396eede4a55ab1f-cc_ft_1536.jpg'
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
                         bg-red-500 p-2 text-white w-1/2 flex place-content-center"><FaArrowRight /></p>
                        </div>
                    </div>
                </div>
                <div className="relative mb-12 w-full max-w-[368px] md:mr-12 
                     md:mb-0  lg:mr-14 xl:mr-16 overflow-hidden max-h-[420px] shadow-md"
                ><img
                        src='https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg'
                        // src='https://photos.zillowstatic.com/fp/a4998c02c5f2eea23396eede4a55ab1f-cc_ft_1536.jpg'
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
                         bg-red-500 p-2 text-white w-1/2 flex place-content-center"><FaArrowRight /></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex xl:mx-[600px] lg:mx-[400px] md:mx-60 mx-28 lg:block md:mt-10">
                <Button className="bg-red-500 hover:bg-red-600 uppercase font-bold">Explore Property</Button></div>
        </section>
    );
};

export default FeaturedProperty;