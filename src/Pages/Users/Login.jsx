import { Button } from "flowbite-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="flex-1 text-center hidden lg:flex">
                        <img src="https://i.ibb.co/93qLr3B/login-concept-illustration-114360-748.jpg" alt="" />
                    </div>
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="flex place-content-center">
                            <img src="https://i.ibb.co/Vjvym7r/logo.png" className="mr-3 h-6 sm:h-9" alt="NewVilla Logo" />
                            <span className="self-center whitespace-nowrap text-2xl font-semibold 
                    dark:text-white font-poppins">
                                NewVilla</span>
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-poppins font-semibold">
                                Login
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3
                                         bg-slate-100 text-gray-800
                                         flex items-center justify-center
                                         transition-all duration-300 ease-in-out
                                         focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-white p-2 rounded-full">
                                            <FaGoogle className='text-red-500' />
                                        </div>
                                        <span className="ml-4">
                                         Login with Google
                                        </span>
                                    </button>
                                    <button
                                        className="w-full max-w-xs 
                                        font-bold shadow-sm rounded-lg py-3 bg-slate-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                        <div className="bg-white p-2 rounded-full">
                                            <FaGithub className='text-red-500' />
                                        </div>
                                        <span className="ml-4">
                                           Login with GitHub
                                        </span>
                                    </button>
                                </div>

                                <div className="my-12 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Or log in with e-mail
                                    </div>
                                </div>

                                <form className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium 
                                        bg-slate-100 border border-gray-200
                                         placeholder-gray-500 text-sm focus:outline-none
                                          focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Email" />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium 
                                        bg-slate-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" />
                                    
                                    <Button
                                        className="mt-5 font-semibold
                                         bg-red-500 text-white
                                         w-full py-2 ">
                                      Log In
                                    </Button>
                                 
                                    <p className="mt-6 text-sm text-gray-600 text-center">
                                        Haven&#x27;t an account?
                                        <Link to='/register'>
                                            <span className="border-b border-red-500 text-red-500 border-dotted ml-1 mr-1">
                                               Sign Up
                                            </span>
                                        </Link>

                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default Login;