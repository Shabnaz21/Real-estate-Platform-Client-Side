import { Label, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet-async";


const UpdateProperties = () => {

    const handleUpdate = {
        // TODO
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
                                            className="text-xl font-poppins font-semibold" value="Property Title" />
                                    </div>
                                    <TextInput
                                        name="title"
                                        placeholder="Property Name"
                                        required />
                                </div>
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold" value="Property Image" />
                                    </div>
                                    <TextInput
                                        name="Properties Image"
                                        // {...register('title', { required: true })}
                                        placeholder="Property Image"
                                        required />
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="md:flex gap-20 mt-4">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold" value="Property Location" />
                                    </div>
                                    <TextInput
                                        name="location"
                                        // {...register('title', { required: true })}
                                        placeholder="location"
                                        required />
                                </div>
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold" value="Price Range" />
                                    </div>
                                    <TextInput
                                        name="price"
                                        // {...register('title', { required: true })}
                                        placeholder="Price"
                                        required />
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="md:flex gap-20 mt-4">
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Property location</span>
                                    </label>
                                    <input type="text"
                                        name='location'
                                        defaultValue={location}
                                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white" disabled />
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Offered Amount </span>
                                    </label>
                                    <input type="text"
                                        name='amount' placeholder="Give Your Amount (Must be Price Range)"
                                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white"  required />
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="md:flex gap-20 mt-4">
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Agent Name" />
                                    </div>
                                    <TextInput
                                        name="agentName"
                                        // {...register('title', { required: true })}
                                        defaultValue={'Agent Name'} disabled/>
                                </div>
                                <div className="form-control w-96">
                                    <div className="mb-2 block">
                                        <Label htmlFor="username3"
                                            className="text-xl font-poppins font-semibold"
                                            value="Agent Email" />
                                    </div>
                                    <TextInput
                                        name="agentEmail"
                                        // {...register('title', { required: true })}
                                       defaultValue={'agent Email'}
                                       disabled />
                                </div>
                            </div>
                            {/* Button */}
                            <div className="form-control flex place-content-center">
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