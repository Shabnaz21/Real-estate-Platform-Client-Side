import { Button } from "flowbite-react";
import SectionTitle from "../../Components/SectionTitle";
import { FaHome, FaRegCheckCircle } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";


const About = () => {
    return (
        <section className="flex items-center py-10 xl:mx-40 lg:mt-5">
            <div className="justify-center 
            flex-1 container py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex xl:gap-x-20 lg:gap-x-10 flex-col lg:flex-row">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="relative ">
                            <img src="https://i.postimg.cc/kGjX7T1M/pexels-andrea-piacquadio-3756679.jpg" alt="about image"
                                className="relative z-10 object-cover w-full lg:h-[550px] rounded" />
                            <div
                                className="absolute bottom-0 right-0 z-10 p-4 bg-white shadow sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                                <p className="text-sm font-semibold">
                                    Providing business solutions from 10 years
                                </p>
                            </div>
                            <div className="absolute hidden w-full lg:h-[550px] bg-red-500 rounded -bottom-6 left-6 lg:block">
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                        <SectionTitle
                            subHeading={'Trusted Real estate Care'}
                            heading={'Dream living Spaces setting New Build'}
                        ></SectionTitle>
                        <p className="mt-6 mb-10 text-lg leading-7">
                            Transmds is the world’s driving worldwide coordinations supplier —
                            we uphold industry and exchange the worldwide trade of merchandi
                        </p>
                        {/* Rounder Design Section */}
                        <div className="flex gap-x-5 flex-col md:flex-row space-y-5 items-center">
                            <div className="flex items-center gap-x-4 text-xl">
                                <div className="relative w-16 h-16 
                            overflow-hidden bg-gray-100 rounded-full border-t-4 border-red-500 dark:bg-gray-600">
                                    <FaHome className="absolute w-8 h-8 m-3 lg:m-2 xl:m-3" />
                                </div>
                                <p className="font-bold">Perfect Duplex Houses</p>
                            </div>
                            <div className="flex items-center gap-x-4 text-xl">
                                <div className="relative w-16 h-16 
                            overflow-hidden bg-gray-100 rounded-full border-t-4 border-red-500 dark:bg-gray-600">
                                    <MdPeopleAlt className="absolute w-8 h-8 m-3 lg:m-2 xl:m-3" />
                                </div>
                                <p className="font-bold">Friendly Support Team</p>
                            </div>
                        </div>
                        {/* list */}
                        <div className="m-8 mx-18 space-y-2 text-lg leading-8">
                            <div className="flex gap-2 items-center">
                                <FaRegCheckCircle className="text-red-500" />
                                <p>Living rooms are pre-wired for Surround</p>
                            </div>
                            <div className="flex gap-2 items-center ">
                                <FaRegCheckCircle className="text-red-500" />
                                <p>Luxurious interior design and amenities</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaRegCheckCircle className="text-red-500" />
                                <p>Nestled in the Buckhead</p>
                            </div>
                        </div>
                        <div className="flex place-content-center lg:block mt-10">
                            <Button className="bg-red-500 hover:bg-red-600 uppercase font-bold">More about us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;