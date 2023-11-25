import { Helmet } from "react-helmet-async";
import Banner from "./BAnner";
import Contact from "./Contact";
import About from "./About";
import Testimonials from "./Testimonials";
import PropertyTypes from "./Types/PropertyTypes";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NewVilla | Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <PropertyTypes></PropertyTypes>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;