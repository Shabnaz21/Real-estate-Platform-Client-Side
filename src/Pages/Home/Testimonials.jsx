import SectionTitle from "../../Components/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';


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
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        review.map(item => <SwiperSlide
                            key={item._id}
                        >
                            <div className="m-24 items-center flex flex-col justify-center  space-y-4">


                                <FaQuoteLeft className="text-6xl" />
                                <p>{item.reviewerName}</p>

                                <h3 className="text-2xl m-10 font-bold font-Cinzel text-yellow-500">{item.propertyTitle}</h3>
                                <p>{item.reviewDescription}</p>
                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;