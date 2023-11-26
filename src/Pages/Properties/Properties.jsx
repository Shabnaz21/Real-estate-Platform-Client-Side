import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import PropertyCard from "./PropertyCard";


const Properties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('/properties.json')
            .then(res => res.json())
            .then(data =>
                setProperties(data)
            )
    }, [])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Properties | NewVilla</title>
            </Helmet>
            <section className="container mx-auto  mt-10 mb-20">
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
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 
               2xl:mx-auto xl:mx-16 lg:mx-32 md:mx-5 mx-10 gap-8 mt-10 xl:mt-20">
                    {
                        properties.map(item => <PropertyCard
                            key={item._id}
                            property={item}

                        ></PropertyCard>)
                    }
            </div>
            </section>

        </>
    );
};

export default Properties;