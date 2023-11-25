import { Helmet } from "react-helmet-async";
import Banner from "./BAnner";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NewVilla | Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;