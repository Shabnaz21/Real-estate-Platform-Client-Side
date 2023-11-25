import { Button } from "flowbite-react";

const Register = () => {
    return (
        <section>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="flex place-content-center">
                            {/* logo */}
                            <img src="https://i.ibb.co/Vjvym7r/logo.png" className="mr-3 h-6 sm:h-9" alt="NewVilla Logo" />
                            <span className="self-center whitespace-nowrap text-2xl font-semibold 
                    dark:text-white font-poppins">
                                NewVilla</span>
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-poppins font-bold">
                               Create a Account
                            </h1>
                            <div className="w-full flex-1 mt-8"> 
                                <form className="mx-auto max-w-xs">
                                    <input type="text"
                                        name='name' placeholder="Give Your Name"
                                        className="w-full px-8 py-4 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white" />
                                    <input
                                        className="w-full mt-5 px-8 py-4 rounded-lg 
                                        font-medium bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 focus:bg-white"
                                        type="email" placeholder="Email" />
                                    <input type="text" name='photo' placeholder="Enter Photo URL"
                                        className="w-full mt-5 px-8 py-4 rounded-lg 
                                        font-medium bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 focus:bg-white" />
                                    <input
                                        className="w-full mt-5 px-8 py-4 rounded-lg 
                                        font-medium bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 focus:bg-white"
                                        type="password" placeholder="Password" />
                                    <Button
                                        className="mt-5 font-semibold bg-red-500 text-white
                                         w-full py-2 ">
                                        Sign Up
                                    </Button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        I agree to abide by templatanas
                                        <a href="#" className="border-b border-gray-500 border-dotted ml-1 mr-1">
                                            Terms of Service
                                        </a>
                                        and its
                                        <a href="#" className="border-b border-gray-500 border-dotted ml-1">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 hidden lg:flex">
                        <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;