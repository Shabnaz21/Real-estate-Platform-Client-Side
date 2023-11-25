import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import SectionTitle from "../../Components/SectionTitle";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMail } from 'react-icons/hi';

const Contact = () => {
    return (
        <section className="container mx-auto">
            <div className="overflow-hidden bg-white py-8 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionTitle
                        subHeading={'Contact with us'}
                        heading={'Looking for to buy a property?'}
                    ></SectionTitle>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <p className="mt-6 text-lg leading-8 text-gray-600">Browse our property listing and find your best and suitable home or house for sale, rent and buying. It’s so easy and fast.
                                </p>
                                <div className="mt-5 ml-10 space-y-3">
                                    <div className="flex gap-2 items-center">
                                        <FaChevronCircleRight className="text-red-500" />
                                        <p>Archit ecto beatae vitae dicta sunt</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <FaChevronCircleRight className="text-red-500" />
                                        <p>Largest global RealEstate market</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <FaChevronCircleRight className="text-red-500" />
                                        <p>Largest global RealEstate market</p>
                                    </div>
                                </div>
                                <div className="mt-10 md:hidden lg:block">
                                    <p className="bg-[#d3cccc] p-20 -mb-20 rounded-lg w-1/2"></p>
                                    <p className="bg-[#C4C4C4] pt-20 ml-10 py-28 rounded-lg "></p>

                                </div>
                            </div>

                        </div>
                        <div className="bg-slate-100 p-16 rounded-lg">
                            <form className="flex max-w-md flex-col gap-4">
                                <div className="max-w-md">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3" value="Name" />
                                    </div>
                                    <TextInput placeholder="Enter Your Name" required />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="email2" value="Your email" />
                                    </div>
                                    <TextInput id="email2" type="email" rightIcon={HiMail} placeholder="name@gmail.com" required shadow />
                                </div>
                                <div className="max-w-md">
                                    <div className="mb-2 block">
                                        <Label htmlFor="comment" value="Your message" />
                                    </div>
                                    <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Checkbox id="agree" />
                                    <Label htmlFor="agree" className="flex">
                                        I agree with the&nbsp;
                                        <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                            terms and conditions
                                        </Link>
                                    </Label>
                                </div>
                                <Button type="submit" className="w-1/2">Send</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;