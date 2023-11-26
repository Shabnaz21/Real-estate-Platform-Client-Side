import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import PropertyInfo from "./PropertyInfo";
import AgnetInfo from "./AgnetInfo";
import PropertyButton from "./PropertyButton";

const PropertyDetails = () => {
    const propertiesData = useLoaderData();
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{propertiesData?.propertyTitle} | NewVilla</title>
            </Helmet>
            <section className="container mx-auto mt-10 mb-16">
                <div>
                    <div className='w-full md:h-[80vh] overflow-hidden rounded-xl'>
                        <img
                            className='object-cover w-full'
                            src={propertiesData.propertyImage}
                            alt='Properties Cover image'
                        />
                    </div>
                </div>
                <div className="max-w-7xl xl:mx-auto mx-10 grid grid-cols-7 gap-20">
                    <PropertyInfo
                        PropertyData={propertiesData}
                    ></PropertyInfo>
                    <div className='col-span-3' >
                        <AgnetInfo PropertyData={propertiesData} />
                        <PropertyButton></PropertyButton>
                    </div>
                   
                </div>
                
                
        </section> 
        </>
    );
};

export default PropertyDetails;