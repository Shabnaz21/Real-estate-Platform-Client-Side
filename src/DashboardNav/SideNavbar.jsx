import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <>
            <div className="relative lg:block navbar-menu">
                <nav
                    className="fixed top-0 transition-all lg:mt-0 mt-16 left-0 dark:bg-gray-900 bottom-0 flex flex-col w-[280px] bg-gray-800 overflow-hidden z-50"
                    id="sidenav">
                    <div className="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-600 dark:border-gray-700">
                        <img src="https://i.ibb.co/Vjvym7r/logo.png" className="mr-3 h-6 sm:h-9" alt="NewVilla Logo" />
                        <span className="self-center whitespace-nowrap text-2xl font-semibold 
                   text-white font-poppins">
                            NewVilla</span>
                    </div>
                    <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                        <ul className="mb-8 text-sm">
                            <li
                                className="flex items-center px-6 py-4 text-gray-300
                                      hover:text-white">
                                <span className="inline-block mr-3">
                                    <MdDashboard className='text-xl' />
                                </span>
                                <span className='text-lg'>Dashboard</span>
                            </li>
                            <li>
                                {/* Collapse Navbar */}
                                <details className="group text-gray-300 text-lg">
                                    <summary
                                        className="flex items-center 
                                            gap-3 px-4 py-3 marker:content-none">
                                        <span className="inline-block items-center">
                                            <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                                </path>
                                            </svg></span>
                                        <p>
                                            <span>Profile</span>
                                        </p>
                                    </summary>
                                    <article className="px-4 mx-10 pb-4">
                                        <NavLink to='/dashboard/my-profile'>
                                            <li className="mb-2"> My Profile </li></NavLink>
                                        <NavLink to='/dashboard/wishlist'>
                                            <li className="mb-2">Wishlist</li>
                                        </NavLink>
                                        <NavLink>
                                            <li className="mb-2">
                                                Property Bought</li>
                                        </NavLink>
                                    </article>
                                </details>
                            </li>
                        <hr  className='mx-5'/>
                            <li className='space-y-3 mt-5'>
                                <NavLink  to='/'
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <FaHome className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Home</span>
                                </NavLink>
                                <NavLink to='/all-properties'
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <FaHome className='text-xl' />
                                    </span>
                                    <span className='text-lg'>All Properties</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SideNavbar;