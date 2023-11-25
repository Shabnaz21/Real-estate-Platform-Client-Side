import SectionTitle from "../../../Components/SectionTitle";
import { MdOutlineAddHomeWork, MdOutlineHomeWork } from "react-icons/md";
import SharedType from "./SharedType";
import { FaHome } from "react-icons/fa";
import { TbHomeCheck } from "react-icons/tb";
import { FaArrowRightToCity } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
const PropertyTypes = () => {
    return (
        <section className="bg-[#F8F7FC]">
            <div className="container mx-auto pl-5 md:pl-10 pt-20 pb-10">
                <div className="flex items-center flex-col md:flex-row lg:gap-x-40 md:gap-x-14 mb-10">
                    <div>
                        <SectionTitle
                            subHeading={'Trusted Real estate Care'}
                            heading={'Explore our Latest Features Listing'}
                        ></SectionTitle>
                    </div>
                    <div className="text-lg mr-2">
                        <p>Our company provides a full range of services for the real
                            private houses and cottages since 19</p>
                    </div>
                </div>
                <div className="max-w-8xl mx-auto lg:mx-28 
                xl:mx-auto mb-10 grid xl:grid-cols-6 
                md:grid-cols-3 grid-cols-2 
                place-content-center">
                    <SharedType
                        icon={<FaHome />}
                        PropertyCategory={'Apartment'}
                        ProjectCount={'20'}
                    ></SharedType>

                    <SharedType
                            icon={<MdOutlineHomeWork />}
                        PropertyCategory={'Town House'}
                            ProjectCount={'15'}
                        ></SharedType>

                    <SharedType
                        icon={<TbHomeCheck />}
                        PropertyCategory={'Multifamily House '}
                        ProjectCount={'10'}
                    ></SharedType>

                    <SharedType
                        icon={<FaArrowRightToCity />}
                        PropertyCategory={'Commercial Space'}
                        ProjectCount={'09'}
                    ></SharedType>

                    <SharedType
                        icon={<IoHomeOutline />}
                        PropertyCategory={'Mobile Home'}
                        ProjectCount={'05'}
                    ></SharedType>

                    <SharedType
                        icon={<MdOutlineAddHomeWork />}
                        PropertyCategory={'Luxury Villa'}
                        ProjectCount={'03'}
                    ></SharedType>
                </div>
            </div>

        </section>
    );
};

export default PropertyTypes;