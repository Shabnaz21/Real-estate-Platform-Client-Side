import { Label, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { HiMail } from "react-icons/hi";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";


const UpdateProperties = () => {
    const propertiesData = useLoaderData();
    const axios = useAxios();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const propertyTitle = form.propertyTitle.value;
        const propertyImage = form.PropertiesImage.value;
        const location = form.location.value;
        const price = form.price.value;

        const updateData = {
            propertyTitle, propertyImage, location, priceRange: price
        }

        axios.patch(`/properties/${propertiesData._id}`, updateData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${propertyTitle} is an Verify Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch((error) => {
                console.error('Error marking user as Property:', error);
            }); 
    }

    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Property | NewVilla </title>
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-poppins md:text-[40px]">
                        Update Property
                    </h2>
                </div>
                <div>
                    <form onSubmit={handleUpdate} className="xl:mx-60 lg:mx-40 mt-10 space-y-3">
                        <div className="xl:mx-32">
                            <div className="md:flex gap-20">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold" value="Update Property Title" />
                                    </div>
                                    <TextInput
                                        name="propertyTitle"
                                        defaultValue={propertiesData?.propertyTitle}
                                       />
                                </div>
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold" value="Update Property Image" />
                                    </div>
                                    <TextInput
                                        name="PropertiesImage"
                                        defaultValue={propertiesData?.propertyImage} />
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="md:flex gap-20 mt-10">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold" value="Update Property Location" />
                                    </div>
                                    <TextInput
                                        name="location"
                                        defaultValue={propertiesData?.location}
                                        placeholder="location" />
                                </div>
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold" value="Update Price Range" />
                                    </div>
                                    <TextInput
                                        name="price"
                                        defaultValue={propertiesData?.priceRange}
                                        placeholder="Price"/>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="md:flex gap-20 mt-10">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Agent Name" />
                                    </div>
                                    <TextInput
                                        name="agentName"
                                        defaultValue={propertiesData?.agentInformation?.agentName}
                                        disabled />
                                </div>
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold" value="Agent Email" />
                                    </div>
                                    <TextInput
                                        name="agentEmail"
                                        icon={HiMail}
                                        defaultValue={propertiesData?.agentInformation?.agentEmail}
                                        disabled/>
                                </div>
                            </div>
                            {/* Button */}
                            <div className="form-control flex place-content-center mt-10">
                                <input type="submit"
                                    value="Update Property"
                                    className="text-xl font-poppins
                            rounded-xl bg-red-500 text-white border-2
                             hover:text-white 
                             mt-5 p-4 w-96 font-semibold" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateProperties;