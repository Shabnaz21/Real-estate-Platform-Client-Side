import { BsFacebook, BsInstagram, BsDribbble, BsGithub, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Footer } from 'flowbite-react';

const FooterDesign = () => {
    return (
        <section >
            <Footer container className=" rounded-none ">
                <div className="w-full container mx-auto">
                    <div className="grid w-full xl:space-x-[500px] lg:space-x-[100px] sm:flex md:flex 
                    gap-x-10 md:grid-cols-1">
                        <aside className="space-y-3">
                            <Footer.Brand 
                                href="/"
                                src="https://i.ibb.co/Vjvym7r/logo.png"
                                alt="NewVilla Logo"
                                name="NewVilla"
                                className="text-2xl font-semibold  font-poppins"
                            />
                            <p className="max-w-md">NewVilla  is an innovative online real estate platform that connects buyers,
                                sellers, and agents in a
                                seamless and user-friendly manner.
                                The platform focuses on providing a unique and engaging experience for users looking to buy or sell properties. </p>
                        </aside>
                        <div className="grid grid-cols-2 gap-8  mt-10 sm:mt-4 
                        sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about"/>
                                <Footer.LinkGroup col >
                                    <Footer.Link href="#">Mission & Vision</Footer.Link>
                                    <Footer.Link href="#">Our Story</Footer.Link>
                                    <Footer.Link href="#">Contact Us</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Explore" className="" />
                                <Footer.LinkGroup col className="">
                                    <Footer.Link href="#">All Properties</Footer.Link>
                                    <Footer.Link href="#">Featured Properties</Footer.Link>
                                    <Footer.Link href="#">Real Estate News</Footer.Link>

                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" className=""/>
                                <Footer.LinkGroup col className="">
                                    <Footer.Link href="#">FAQs</Footer.Link>
                                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div> 
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between inline">
                        <p className="font-poppins text-center">Copyright © 2023 - All right reserved</p>
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </Footer>
            <footer>
                <div className="flex items-center p-4 lg:pl-20 lg:pr-10 bg-[#F23B3B] text-white gap-x-20  justify-between">
                    <p></p>
                    <nav className="grid-flow-col gap-4 md:place-self-center font-semibold md:justify-self-end">
                        Developed by: <Link to='https://github.com/Shabnaz21'>Shabnaz</Link>
                    </nav>
                </div>
            </footer>
        </section>
    );
};

export default FooterDesign;