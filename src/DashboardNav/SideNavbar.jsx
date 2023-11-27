import { FaHome, FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Dropdown } from 'flowbite-react';
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
                            <li>
                                <li
                                    className="flex items-center px-6 py-4 text-gray-300
                                      hover:text-white">
                                    <span className="inline-block mr-3">
                                        <MdDashboard className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Dashboard</span>
                                </li>
                            </li>
                            <li>
                                <li
                                    className="flex items-center px-6 py-4 text-gray-300
                                      hover:text-white">
                                    <span className="inline-block mr-3">
                                        <FaUser />
                                    </span>
                                    <span>
                                        <Dropdown label="Profile"
                                            inline>
                                            <NavLink to='/dashboard/my-profile'><Dropdown.Item>
                                                My Profile
                                            </Dropdown.Item> </NavLink>
                                            <Dropdown.Item>Wishlist</Dropdown.Item>
                                            <Dropdown.Item>Property Bought</Dropdown.Item>
                                        </Dropdown>
                                    </span>
                                </li>
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