import SectionTitle from "../../Components/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';


import { useEffect, useState } from 'react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Testimonials = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section className="container mx-auto">
            <div className='xl:ml-[500px] lg:ml-80 ml-16'>
                <SectionTitle
                    subHeading={'Trusted Real estate Care'}
                    heading={'Find Client’s Feedback'}

                ></SectionTitle>
            </div>
            <div className="container mx-auto mb-10">
                <Swiper pagination={{
                    type: 'fraction',
                }}

                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                    {
                        review.map(item => <SwiperSlide
                            key={item._id}

                        ><div className="container mx-auto">
                                <div>
                                    <div className="relative flex justify-center">
                                        <div
                                            className="relative w-full pb-16 
                                            md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0"
                                        >
                                            <div
                                                className="flex-no-wrap snap 
                                                mx-auto flex h-auto 
                                                w-full max-w-[300px] 
                                                overflow-hidden transition-all 
                                                sm:max-w-[508px] md:max-w-[630px] 
                                                lg:max-w-[738px] xl:max-w-[910px]"

                                            >
                                                <div
                                                    className="xs:min-w-[368px] 
                                                    mx-auto h-full min-w-[300px] 
                                                    sm:min-w-[508px] 
                                                    sm:p-6 md:min-w-[630px] 
                                                    lg:min-w-[738px] 
                                                    xl:min-w-[910px]"
                                                >
                                                    <div className="w-full md:flex">
                                                        <div
                                                            className="relative mb-12 
                                                            w-full max-w-[310px] md:mr-12 
                                                            md:mb-0 md:max-w-[250px] 
                                                            lg:mr-14 lg:max-w-[280px] xl:max-w-[310px] 
                                                            xl:mr-16 overflow-hidden max-h-[400px]"
                                                        >
                                                            <img
                                                                src={item.reviewerImage}
                                                                alt="image"
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <div className="w-full text-left">
                                                            <div>
                                                                <div className="mb-4 lg:mt-10">
                                                                    <p className="text-2xl text-red-500 font-bold">
                                                                        {item.propertyTitle}</p>
                                                                </div>
                                                                <p
                                                                    className="
                                                                     mb-11 
                                                                     leading-[1.81] font-normal italic sm:text-[22px]"
                                                                >
                                                                    {item.reviewDescription}
                                                                </p>
                                                                <h4 className="
                                                                 mb-2 leading-[27px]
                                                                 text-[22px]
                                                                 font-bold">
                                                                    {item.reviewerName}
                                                                </h4>
                                                                <p>
                                                                    {item.reviewerDesignation}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;