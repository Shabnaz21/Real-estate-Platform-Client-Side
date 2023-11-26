import { Avatar, Button } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { FaHome, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline, IoPricetag } from "react-icons/io5";
import { MdVerified } from "react-icons/md";


const Properties = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Properties | NewVilla</title>
            </Helmet>
            <section className="container mx-auto mt-10 mb-20">
                <div className="md:mx-auto max-w-4xl space-y-3 mx-10 ">
                    <div className="lg:mx-80 mx-14 md:mx-64">
                        <div className="flex items-center gap-4 text-red-500">
                            <FaHome className="text-xl" />
                            <p className="uppercase font-bold">
                                Diverse Homes Await
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="213" height="6" viewBox="0 0 213 6" fill="none">
                            <path d="M0.385449 5.06768C70.7978 
                        3.06405 140.806 2.7456 211.168 5.99651C213.628
                        6.11593 213.594 3.1304 211.168 2.98444C141.261 -1.1555 70.1407
                        -1.27492 0.385449 4.44403C-0.120024 4.48384 -0.136873 5.08095 0.385449 5.06768Z"
                                fill="#F23B3B" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <h1 className="mt-2 mb-6 text-5xl font-bold font-poppins tracking-tight md:text-4xl ">
                            Explore a Diverse Range of Verified Properties
                        </h1>
                        <p className="text-xl"> Browse through our curated collection of homes, apartments, and more. Find the perfect property
                            that suits your lifestyle and preferences. Your dream home is just a click away!</p>
                   </div>
                </div>
                {/* card */}
                <div className="max-w-6xl mt-28 xl:mx-auto mx-10">
                    <div className='flex flex-col gap-2 shadow-lg max-h-[500px] rounded-xl
              w-[375px]'>
                        <div
                            className='aspect-square w-full
                            relative overflow-hidden rounded-t-xl'>
                            <img className='object-cover '
                                src='https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg' alt='Property'/>
                            <div className='absolute top-3 right-3'>
                                <MdVerified className="text-2xl text-red-500" />
                            </div>
                        </div>
                        {/* agents */}
                        <div className="pl-5 pr-4 flex justify-between items-center">
                            <Avatar img="/images/people/profile-picture-5.jpg" size="md" className="justify-start"
                                bordered color="pink" rounded>
                                <div className="space-y-1 font-medium dark:text-white">
                                    <p className="text-lg font-extrabold">Leslie Alexander</p>
                                </div>
                            </Avatar>
                            <div className="text-xl text-red-500">
                                <FaRegHeart />
                            </div>
                        </div>
                        {/* details */}
                        <div className="p-5 space-y-2">
                            <div className='font-semibold text-xl'>Sidemen, Indonesia</div>
                            <div className="flex gap-3 items-center">
                                <IoPricetag className="text-lg" />
                                <p>price</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <IoLocationOutline className="text-lg" />
                                <p>Location</p>
                            </div>
                        </div>
                        <div className="pb-5 flex place-content-center">
                            <Button className="w-1/2 ">Details</Button>
                        </div>
                        
                    </div>
                </div>

            </section>

        </>
    );
};

export default Properties;