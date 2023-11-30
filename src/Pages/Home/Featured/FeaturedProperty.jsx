import SectionTitle from "../../../Components/SectionTitle";
import { Button, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";
import useProperties from "../../../Hooks/useProperties";
import useAuth from "../../../Hooks/useAuth";

const FeaturedProperty = () => {
    const { loading } = useAuth();
    const [properties] = useProperties();
    const sortedProperties = [...properties].sort((a, b) => b.propertiesQuantity - a.propertiesQuantity);

    // Slice the sorted array to show only the first 6 items
    const displayedProperties = sortedProperties.slice(0, 4);
    
    // loading
    if (loading) {
        return <div className="flex place-content-center">
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }

    return (
        <section className="container mt-10  xl:mx-auto">
            <div className="mx-10">
                <SectionTitle
                    subHeading={'Tending'}
                    heading={'Advertisement Properties'}
                ></SectionTitle>
                <p className="mt-4 text-xl">Find your suitable house here and stay safe and relax with pleasure</p>
            </div>
            <div className="lg:max-w-8xl mt-10 grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 mx-4 xl:mx-auto ">
                {
                    displayedProperties.map(item => <FeaturedCard
                        key={item._id}
                        properties={item}
                    ></FeaturedCard>)
              }
            </div>
            <div className="flex xl:mx-[600px] lg:mx-[400px] md:mx-60 mx-28 lg:block md:mt-10">
                <Link to='/all-properties'> <Button className="bg-red-500 hover:bg-red-600 uppercase font-bold">Explore Property</Button></Link></div>
        </section>
    );
};

export default FeaturedProperty;