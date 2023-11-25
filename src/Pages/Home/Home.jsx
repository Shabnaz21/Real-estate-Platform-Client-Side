import { Helmet } from "react-helmet-async";
import Banner from "./BAnner";
import Contact from "./Contact";
import About from "./About";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NewVilla | Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;