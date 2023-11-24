import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdOutlineMailLock } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const menus = <>
        <li><NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? 'text-[#F23B3B] md:text-lg' : 'md:text-lg'
            }
        >Home
        </NavLink> </li>
        <li><NavLink to='/all-properties'
            className={({ isActive }) =>
                isActive ? 'text-[#F23B3B] md:text-lg' : 'md:text-lg'
            }
        >All properties </NavLink> </li>
        <li><NavLink to='/register'
            className={({ isActive }) =>
                isActive ? 'text-[#F23B3B] md:text-lg' : 'md:text-lg'
            }
        >Register</NavLink></li>
    </>

    return (
        <section >
            <div className="hidden lg:block bg-[#071C1F] text-white">
                <div className="navbar container mx-auto p-2">
                    <div className='flex items-center justify-between font-nunito'>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-3">
                                <MdOutlineMailLock className='text-xl hover:text-[#F23B3B]' />
                                <p className="md:text-md">Info@webmail.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <IoLocation className='text-xl hover:text-[#F23B3B]' />
                                <p className="md:text-md">547 ns tower St. anglo City, USA</p>
                            </div>
                        </div>
                        <div className="gap-5">
                            <div className="flex gap-3">
                                <BsFacebook className='hover:text-[#F23B3B]'/>
                                <BsTwitter className='hover:text-[#F23B3B]'/>
                                <BsLinkedin className='hover:text-[#F23B3B]' />
                                <BsInstagram className='hover:text-[#F23B3B]' />
                                <BsYoutube className='hover:text-[#F23B3B]' />
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
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                    <Button className='font-nunito bg-[#F23B3B]'>Sign Up</Button>
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