import { Helmet } from "react-helmet-async";
import Banner from "./BAnner";
import Contact from "./Contact";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NewVilla | Home</title>
            </Helmet>
            <Banner></Banner>
            <Contact></Contact>
        </div>
    );
};

export default Home;