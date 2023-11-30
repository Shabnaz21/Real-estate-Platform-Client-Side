import { FaHome, FaUserCog } from "react-icons/fa";
import { MdOutlineContactSupport, MdOutlineRateReview } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineProfile } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import useAdmin from "../Hooks/useAdmin";
import useLogOut from "../Hooks/useLogOut";
import useAgent from "../Hooks/useAgent";

const SideNavbar = () => {
    const logOut = useLogOut();
    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();

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
                            {
                                isAdmin ?
                                    <li className="text-gray-300 text-xl m-2">
                                        <li className=" text-gray-300  space-y-3 mt-5  mb-5">  
                                            <NavLink to='/dashboard/admin-profile'
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
                                    </li>
                                    :
                                isAgent ? <>
                                    <li className="text-gray-300 text-xl m-2">
                                    <li className=" text-gray-300  space-y-3 mt-5  mb-5">
                                        <NavLink to='/dashboard/agent-profile'
                                            className={({ isActive }) =>
                                                isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                            }>
                                            <span className="inline-block mr-3">
                                                <ImProfile className='text-xl' />
                                            </span>
                                            <span className='text-lg'>Agent Profile</span>
                                        </NavLink>
                                                <NavLink to='/dashboard/add-property'
                                            className={({ isActive }) =>
                                                isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                            }>
                                            <span className="inline-block mr-3">
                                                <AiOutlineProfile className='text-xl ' />
                                            </span>
                                                <span className='text-lg'> Add Property</span>
                                        </NavLink>
                                                <NavLink to='/dashboard/my-added-properties'
                                            className={({ isActive }) =>
                                                isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                            }>
                                            <span className="inline-block mr-3">
                                                <FaUserCog className='text-xl' />
                                            </span>
                                                <span className='text-lg'> My Added properties</span>
                                        </NavLink>
                                                <NavLink to='/dashboard/sold-properties'
                                            className={({ isActive }) =>
                                                isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                            }>
                                            <span className="inline-block mr-3">
                                                <RiSecurePaymentLine className='text-xl' />
                                            </span>
                                                <span className='text-lg'>My Sold Properties</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/manage-reviews'
                                            className={({ isActive }) =>
                                                isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                            }>
                                            <span className="inline-block mr-3">
                                                <RiSecurePaymentLine className='text-xl' />
                                            </span>
                                                <span className='text-lg'>Requested/Offered properties</span>
                                        </NavLink>

                                    </li>
                                </li>
                                </> : <>
                                        <li className="text-gray-300 text-xl m-2">
                                            <NavLink to='/dashboard/user-profile'
                                                className={({ isActive }) =>
                                                    isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                                }
                                            >
                                                <li className="mb-2 flex items-center gap-3">
                                                    <ImProfile ></ImProfile>My Profile
                                                </li></NavLink>
                                            <NavLink to='/dashboard/wishlist'
                                                className={({ isActive }) =>
                                                    isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                                }
                                            >
                                                <li className="mb-2 flex items-center gap-3">
                                                    <AiOutlineProfile />
                                                    Wishlist
                                                </li>
                                            </NavLink>
                                            <NavLink to='/dashboard/offer'
                                                className={({ isActive }) =>
                                                    isActive ?
                                                        'flex items-center px-6 text-[#5fd2e9] md:text-lg'
                                                        : 'flex px-6 items-center md:text-lg'
                                                }

                                            >
                                                <li className="mb-2 flex items-center gap-3">
                                                    <RiSecurePaymentLine /> Property Bought</li>
                                            </NavLink>
                                            <NavLink to='/dashboard/my-reviews'
                                                className={({ isActive }) =>
                                                    isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                                }
                                            >
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
                                <div onClick={logOut}
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <RiLogoutBoxLine className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Sign Out</span>
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