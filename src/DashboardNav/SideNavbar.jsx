import { FaHome, FaUserCog } from "react-icons/fa";
import { MdOutlineContactSupport, MdOutlineRateReview } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineProfile } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {

    const isAdmin = true;

    return (
        <>
            <div className="relative lg:block navbar-menu">
                <nav
                    className="fixed top-0 transition-all lg:mt-0 
                    left-0  bottom-0 flex flex-col w-[280px] bg-gray-800 overflow-hidden z-50"
                    id="sidenav">
                    <div className="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-600
                     ">
                        <img src="https://i.ibb.co/Vjvym7r/logo.png" className="mr-3 h-6 sm:h-9" alt="NewVilla Logo" />
                        <span className="self-center whitespace-nowrap text-2xl font-semibold 
                   text-white font-poppins">
                            NewVilla</span>
                    </div>
                    <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                        <ul className="mb-8 text-sm">
                            {/* <li
                                className="flex items-center px-6 py-4 text-gray-300
                                      hover:text-white">
                                <span className="inline-block mr-3">
                                    <MdDashboard className='text-xl' />
                                </span>
                                <span className='text-lg'>Dashboard</span>
                            </li> */}
                            {
                                isAdmin ?
                                    <>
                                        <li className=" text-gray-300  space-y-3 mt-5  mb-5">  
                                            <NavLink to='/dashboard/my-profile'
                                                className={({ isActive }) =>
                                                    isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                                }>
                                                <span className="inline-block mr-3">
                                                    <ImProfile className='text-xl' />
                                                </span>
                                                <span className='text-lg'>Admin Profile</span>
                                            </NavLink>
                                            <NavLink to='/dashboard/manage-properties'
                                                className={({ isActive }) =>
                                                    isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                                }>
                                                <span className="inline-block mr-3">
                                                    <AiOutlineProfile className='text-xl ' />
                                                </span>
                                                <span className='text-lg'> Manage Properties</span>
                                            </NavLink>
                                            <NavLink to='/dashboard/users'
                                                className={({ isActive }) =>
                                                    isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                                }>
                                                <span className="inline-block mr-3">
                                                    <FaUserCog className='text-xl' />
                                                </span>
                                                <span className='text-lg'> Manage Users</span>
                                            </NavLink>
                                            <NavLink to='/dashboard/manage-reviews'
                                                className={({ isActive }) =>
                                                    isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                                }>
                                                <span className="inline-block mr-3">
                                                    <RiSecurePaymentLine className='text-xl' />
                                                </span>
                                                <span className='text-lg'> Manage Reviews</span>
                                            </NavLink>
                                           
                                        </li>  
                                    </>
                                    :
                                    <>
                                        <li>
                                            <NavLink to='/dashboard/my-profile'>
                                                <li className="mb-2 flex items-center gap-3">
                                                    <ImProfile ></ImProfile> My Profile
                                                </li></NavLink>
                                            <NavLink to='/dashboard/wishlist'>
                                                <li className="mb-2 flex items-center gap-3">
                                                    <AiOutlineProfile />
                                                    Wishlist
                                                </li>
                                            </NavLink>
                                            <NavLink>
                                                <li className="mb-2 flex items-center gap-3">
                                                    <RiSecurePaymentLine /> Property Bought</li>
                                            </NavLink>
                                            <NavLink>
                                                <li className="mb-2 flex items-center gap-3">
                                                    <MdOutlineRateReview /> My Reviews</li>
                                            </NavLink>

                                        </li> 
                                        
                                    </>
                            }
                            
                            {/* shared nav */}
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
                                        <BiStoreAlt className='text-xl' />
                                    </span>
                                    <span className='text-lg'>All Properties</span>
                                </NavLink>
                                <NavLink to='/contact'
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <MdOutlineContactSupport className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Contact</span>
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