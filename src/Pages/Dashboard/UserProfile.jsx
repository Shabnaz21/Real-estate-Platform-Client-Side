import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useProfile from "../../Hooks/UseProfile";
import { Spinner } from "flowbite-react";


const UserProfile = () => {
    const [profile] = useProfile();
    const { loading } = useAuth();
    // loading
    if (loading) {
        return (<div className="flex mx-56 place-content-center">
            return <div className="flex place-content-center">
                <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
        </div>)
    }

    if (!profile || !profile[0]) {
       
        return <div className="container mx-auto">
            <div className="flex place-content-center w-9/12 mt-32 mx-auto">
                <img src="https://i.ibb.co/pvfdMWt/website-error-6333614-5230174.png"
                    className="w-[800px]"
                    alt="Sorry! Error" />

            </div>
        </div>;
    }

    const user = profile[0];

    return (
        <section className='container mx-auto'>
            <header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
                <img className="inline-flex object-cover border-4
                 border-red-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)]
                  shadow-red-600/100  bg-red-50 
                   text-red-600 h-24 w-24 !h-48 !w-48"
                    src={user.image} alt={user.name} />
                <h1 className="text-2xl text-gray-500 font-bold mt-5">
                    {user.name}
                </h1>
                <h2 className="text-base mt-2  md:text-xl text-gray-500 font-semibold">
                    {user.email}
                </h2>
                {
                    user.role ? <p className="text-base mt-2  md:text-lg text-gray-500 font-semibold">
                        Role: <span className="uppercase">{user.role}</span>
                    </p> :
                        <></>
                }

                <ul className="flex flex-row mt-5 text-2xl text-red-600">
                    <li className="mx-2">
                        <a href="">
                            <FaTwitter /> </a>
                    </li>
                    <li className="mx-2">
                        <a href="">
                            <FaFacebook /> </a>
                    </li>
                    <li className="mx-2">
                        <a href="">
                            <FaLinkedin /> </a>
                    </li>
                    <li className="mx-2">
                        <a href="">
                            <FaGithub /> </a>
                    </li>
                </ul>
            </header>
        </section>
    );
};

export default UserProfile;