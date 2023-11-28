import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdOutlineMailLock } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Nav = () => {
    const { user, logOut } = useAuth();
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const menus = <>
        <li><NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? 'text-rose-600 md:text-lg' : 'md:text-lg'
            }
        >Home
        </NavLink> </li>
        {/* ToDO:add link & change color */}
        <li><NavLink 
            className={({ isActive }) =>
                isActive ? 'md:text-lg' : 'md:text-lg'
            }
        >About</NavLink></li>

        <li><NavLink to='/all-properties'
            className={({ isActive }) =>
                isActive ? 'text-rose-600 md:text-lg' : 'md:text-lg'
            }
        > All Properties </NavLink> </li>
        {/* ToDO:add link & change color */}
        <li><NavLink 
            className={({ isActive }) =>
                isActive ? ' md:text-lg' : 'md:text-lg'
            }
        >Blog</NavLink></li>
        {/* ToDO:add link & change color */}
        <li><NavLink 
            className={({ isActive }) =>
                isActive ? ' md:text-lg' : 'md:text-lg'
            }
        >News</NavLink></li>
        <li><NavLink to='/contact'
            className={({ isActive }) =>
                isActive ? 'text-rose-600 md:text-lg' : 'md:text-lg'
            }
        >Contact</NavLink></li>
        <li><NavLink to='/dashboard'
            className={({ isActive }) =>
                isActive ? 'text-rose-600 md:text-lg' : 'md:text-lg'
            }
        >Dashboard</NavLink></li>
    </>

    return (
        <section >
            <div className="hidden lg:block bg-[#0E7490] text-white">
                <div className="navbar container mx-auto p-2">
                    <div className='flex items-center justify-between font-nunito'>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-3">
                                <MdOutlineMailLock className='text-xl hover:text-red-500' />
                                <p className="md:text-md">Info@webmail.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <IoLocation className='text-xl hover:text-red-500' />
                                <p className="md:text-md">547 ns tower St. anglo City, USA</p>
                            </div>
                        </div>
                        <div className="gap-5">
                            <div className="flex gap-3">
                                <BsFacebook className='hover:text-red-500' />
                                <BsTwitter className='hover:text-red-500' />
                                <BsLinkedin className='hover:text-red-500' />
                                <BsInstagram className='hover:text-red-500' />
                                <BsYoutube className='hover:text-red-500' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Navbar fluid rounded className='container mx-auto '>
                <Navbar.Brand>
                    <img src="https://i.ibb.co/Vjvym7r/logo.png" className="mr-3 h-6 sm:h-9" alt="NewVilla Logo" />
                    <span className="self-center whitespace-nowrap text-2xl font-semibold 
                    dark:text-white font-poppins">
                        NewVilla</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ? (
                            <>
                                <div >
                                    <Dropdown
                                        arrowIcon={false}
                                        inline
                                        label={
                                            <Avatar alt={user.displayName}
                                                img={user.photoURL} 
                                                rounded />
                                        }
                                    >
                                        <Dropdown.Header>
                                            <span className="block text-sm">{user.displayName}</span>
                                            <span className="block truncate text-sm font-medium">{user.email}</span>
                                        </Dropdown.Header>
                                        <Link to='/dashboard/my-profile'><Dropdown.Item>
                                            My Profile
                                        </Dropdown.Item> </Link>
                                        
                                        <Dropdown.Item>Settings</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
                                    </Dropdown>
                                    <Navbar.Toggle />
                                </div>
                            </>
                        ) : (
                                <Link to='/register'>
                                    <Button className='font-nunito bg-red-500'>Sign Up</Button>
                                </Link>   
                        )}
               </div>
                <div className='items-center'>
                    <Navbar.Collapse className='font-nunito'>
                        {menus}
                    </Navbar.Collapse>
                </div>

            </Navbar>
        </section>

    );
};

export default Nav;