import { FileInput, Label, Select, TextInput, Textarea } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { FaBed } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdOutlineBathroom } from "react-icons/md";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HISTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddProperty = () => {

    const axios = useAxios();

    const { user } = useAuth();

    const agentName = user?.displayName;
    const agentEmail = user?.email;
    const agentImage = user?.photoURL;

    // const { register, handleSubmit, reset } = useForm();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const PImage = form.propertyImage.value;
        const description = form.description.value;
        const price = form.price.value;
        const type = form.type.value;
        const bedRoom = form.bedRoom.value;
        const bathRoom = form.BathRoom.value;
        const footage = form.sqt.value;
        const agentPhone = form.agentPhone.value;
        const location = form.location.value;
        const extraFeature = form.ExtraFeature.value;  

        form.reset();
        
        const propertyData = {
            agentInformation: { agentName, agentEmail, agentImage, agentPhone },
            propertyTitle: title,
            propertyImage: PImage,
            propertySpecifications: {
                type, bedRoom,
                bathRoom, footage},
            propertyDescription: description, priceRange: price, location,
            extraFeature
        }
        await onSubmit(propertyData);
    }
 
    const onSubmit = async (data) => {
        
        const imageFile = { image: data.propertyImage }
        try {
            const res = await axios.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                },
                withCredentials: false,
            });
            console.log(res.data);
        } catch (error) {
            console.error("Error:", error.response.data);
        }   
    }

    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Add Property | NewVilla </title>
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-poppins md:text-[40px]">
                        List Your Property with Ease
                    </h2>
                    <p className="text-base px-10 text-body-color mb-5">
                        Ready to sell your property? Showcase it to a world of potential buyers.
                        Our easy to use platform ensures a seamless experience
                        – list, connect, and close the deal hassle-free. Your property journey starts here.
                    </p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}
                        // onSubmit={handleOffer}
                        className="xl:mx-60 lg:mx-40 mt-10 space-y-3">
                        <div className="xl:mx-28">
                            <div className="md:flex gap-20">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold" value="Property Title" />
                                    </div>
                                    <TextInput
                                        name="title"
                                        // {...register('title', { required: true })}
                                        placeholder="Property Name"
                                        required />
                                </div>
                                {/* image */}
                                <div className="form-control w-96">
                                    <div id="fileUpload" className="max-w-md">
                                        <div className="mb-2 block">
                                            <Label htmlFor="file" value="Property Image"
                                                className="text-xl font-poppins font-semibold" />
                                        </div>
                                        <FileInput id="file"
                                            // {...register('image', { required: true })}
                                        name="propertyImage"/>
                                    </div>
                                </div>
                                
                            </div>
                            {/* 2 line */}
                            <div className="md:flex gap-20 mt-5">
                                <div className=" w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold" value="Property Description" />
                                    </div>
                                    <TextInput
                                        name="description"
                                        // {...register('description', { required: true })}
                                        placeholder="Give a Property Description"
                                        required />
                                </div>
                                {/* Price range */}
                                <div className=" w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Price range " />
                                    </div>
                                    <TextInput
                                        name="price"
                                        // {...register('price', { required: true })}
                                        placeholder="Give Your Asking Price Range"
                                        required />
                                </div>
                            </div>
                            {/* propertySpecifications */}
                            <div className="md:flex gap-20 mt-5">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Property Type" />
                                    </div>
                                    <TextInput
                                        name="type"
                                        // {...register('type', { required: true })}
                                        placeholder="Property Type"
                                        required />
                                </div>
                                {/* bed */}
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Bed Room" />
                                    </div>
                                    <Select id="BedRoom"
                                        name="bedRoom"
                                        icon={FaBed}    
                                        required>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>6</option>
                                        <option>8</option>
                                        <option>10</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="md:flex gap-20 mt-5">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="BathRoom" />
                                    </div>
                                    <Select name="BathRoom"
                                        // {...register('bathRoom', { required: true })}
                                        icon={MdOutlineBathroom}
                                        required>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>6</option>
                                    </Select>
                                </div>
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Square Footage" />
                                    </div>
                                    <TextInput
                                        name="sqt"
                                        // {...register('squareFootage', { required: true })}
                                        placeholder="Square Footage"
                                        required />
                                </div>
                            </div>
                            {/* agent  */}
                            <div className="md:flex gap-20 mt-5">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Agent Name" />
                                    </div>
                                    <TextInput
                                        name="agentName"
                                  defaultValue={user?.displayName}
                                        placeholder="Agent Name"
                                        disabled />
                                </div>
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="email4" value="Your email"
                                            className="text-xl font-poppins font-semibold" />
                                    </div>
                                    <TextInput name="agentEmail" type="email"
                                        defaultValue={user?.email}
                                        icon={HiMail} placeholder="name@flowbite.com" disabled/>
                                </div>
                            </div>
                            {/* agent -2line */}
                            <div className="md:flex gap-20 mt-5">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Agent Image" />
                                    </div>
                                    <TextInput
                                        name="agentImage"
                                       disabled
                                        placeholder="Agent Image"
                                      defaultValue={user?.photoURL} />
                                </div>
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Agent Phone" />
                                    </div>
                                    <TextInput
                                        name="agentPhone"
                                        // {...register('agentPhone', { required: true })}
                                        placeholder="Agent Phone"
                                        required />
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="md:flex items-center gap-20 mt-5">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Property Location" />
                                    </div>
                                    <TextInput
                                        name="location"
                                        // {...register('location', { required: true })}
                                        placeholder="Property Location"
                                        required />
                                </div>
                                <div className="form-control w-96">
                                    <div className="mb-2  mt-4 block">
                                        <Label htmlFor="comment" value="Additional Features" className="font-poppins text-lg" />
                                    </div>
                                    <Textarea name="ExtraFeature" placeholder="Give Your Property Extra Features"
                                        required rows={6}
                                        // {...register('ExtraFeature', { required: true })}
                                        helperText={
                                            <>
                                                Please give All Features in a
                                                <span className="font-medium ml-1">list(Number/Bullet).</span>
                                            </>
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                            
                        </div>
                            {/* Button */}
                            {/* onClick={() => handleEdit(_id)} */}
                            <div className="form-control flex place-content-center">
                                <input type="submit"
                                    value="Add Property "
                                    className="text-xl font-poppins 
                            rounded-xl bg-[#0E7490] text-white 
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

export default AddProperty;