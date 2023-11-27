import { FaUser } from "react-icons/fa";
import { FaArrowsDownToLine } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";


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
                                <a href="#"
                                    className="flex items-center px-6 py-4 text-gray-300
                                     group hover:text-white hover:bg-gray-900">
                                    <span className="inline-block mr-3">
                                        <MdDashboard />
                                    </span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                    className="flex items-center px-6 py-4 text-gray-300 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-white hover:bg-gray-900">
                                    <span className="inline-block mr-3">
                                        <FaUser />
                                    </span>
                                    <span> Profile </span>
                                    <span className="inline-block ml-auto sidenav-arrow">
                                        <FaArrowsDownToLine />
                                    </span>
                                </a>
                                <div className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu">
                                    <ul className="text-sm font-medium">
                                        <li>
                                            <a href="#"
                                                className="flex items-center py-3 pl-3 pr-4 text-white rounded 
                                                  hover:bg-gray-900 ">
                                                <span className="text-white ">My Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="flex items-center py-3 pl-3 pr-4 text-white rounded  
                                                 hover:bg-gray-900 ">
                                                <span className="text-white ">Wishlist </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="flex items-center py-3 pl-3 pr-4 text-white rounded  dark:hover:bg-gray-800 hover:bg-gray-900 ">
                                                <span className="text-white dark:text-gray-400">Property Bought</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SideNavbar;