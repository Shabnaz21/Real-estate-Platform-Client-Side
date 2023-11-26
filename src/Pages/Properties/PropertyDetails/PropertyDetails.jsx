import { Helmet } from "react-helmet-async";


const PropertyDetails = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Properties Details | NewVilla</title>
            </Helmet>
            <section className="container mx-auto mt-10">
                <div>
                    <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                        <img
                            className='object-cover w-full'
                            src='https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518_640.jpg'
                            alt='Properties Cover image'
                        />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-7">
                    
                </div>
                
        </section> 
        </>
    );
};

export default PropertyDetails;