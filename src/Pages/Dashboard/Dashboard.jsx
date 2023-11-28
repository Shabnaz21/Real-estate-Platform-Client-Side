import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title> DashBoard | NewVilla </title>
            </Helmet>
            <div className="container mx-auto">
                <div className="flex place-content-center w-9/12 mt-32 mx-auto">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-2081747-1764587.png?f=webp"
                        className="w-[800px]"
                        alt="welcome" />

                </div>
            </div>
        </section>
    );
};

export default Dashboard;