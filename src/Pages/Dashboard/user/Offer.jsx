import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const Offer = () => {
    const { user } = useAuth();
    const axios = useAxios();
    const DealData = useLoaderData();
    const { propertyTitle, propertyImage, location, agentInformation } = DealData;
    console.log(DealData);
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userPhoto = user?.photoURL;
    const handleOffer = event => {
        event.preventDefault();
        const form = event.target;
        const buyingDate = form.date.value;
        const offerPrice = form.amount.value;
        const billingAddress = form.address.value;
        const userPhone = form.buyerPhone.value;
        form.reset();

        const offer = {
            propertyTitle,
            propertyImage,
            location,
            agentInformation,
           buyingDate,offerPrice,
            billingAddress,
            userEmail,
            userPhoto ,
            userName,
            userPhone,
           status:'Pending'
        }
        //send Data with axios
        axios.post('/proposal', offer)
            .then(data => {
                console.log(data.data);
                if (data?.data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: `Your ${propertyTitle} successfully Counted!`,
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            }).catch(error => {
                console.log(error);
            })
}
    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Make An Offer | NewVilla </title>
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-poppins md:text-[40px]">
                        Possibilities with Your Unique Proposal
                    </h2>
                    <p className="text-base px-10 text-body-color mb-5">
                        Submit your offer for the property of your dreams effortlessly.
                        Fill in the required details, including the offered amount within the specified range set by the property agent.
                        Your journey to homeowners starts with a simple form – let&apos;s make it happen!
                    </p>
                </div>
                <div>
                    <form onSubmit={handleOffer} className="xl:mx-60 lg:mx-40 mt-10 space-y-3">
                        <div className="xl:mx-32">
                            <div className="md:flex gap-20">
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Property Title</span>
                                    </label>
                                    <input type="text"
                                        name='PropertyTitle' defaultValue={propertyTitle}
                                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white" disabled />
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Property Image</span>
                                    </label>
                                    <input type="text"
                                        name='PropertyImage' defaultValue={propertyImage}
                                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white" disabled/>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="md:flex gap-20 mt-4">
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Agent Name</span>
                                    </label>
                                    <input type="text"
                                        name='AgentName'
                                        defaultValue={agentInformation?.agentName}
                                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white" disabled />
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Buying Date </span>
                                    </label>
                                    <input type="date"
                                        name='date' placeholder="Date"
                                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white"  />
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
                                           focus:bg-white"  required/>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="md:flex gap-20 mt-4">
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Buyer Name</span>
                                    </label>
                                    <input type="text"
                                        name='BuyerName'
                                        defaultValue={user?.displayName}
                                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white" disabled />
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Buyer Email </span>
                                    </label>
                                    <input type="text"
                                        name='BuyerEmail' defaultValue={user?.email}
                                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white" disabled />
                                </div>
                            </div>
                            {/* 5 */}
                            <div className="md:flex gap-20 mt-4">
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Billing Address</span>
                                    </label>
                                    <input type="text"
                                        name='address'
                                        placeholder="Give your Address"
                                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white" />
                                </div>
                                <div className="form-control w-96">
                                    <label className="label">
                                        <span className="text-xl font-semibold">Buyer Phone</span>
                                    </label>
                                    <input type="text"
                                        name='buyerPhone'
                                        placeholder="Give your contact Number"
                                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white" />
                                </div>
                            </div>
                            {/* Button */}
                             {/* onClick={() => handleEdit(_id)} */}
                            <div className="form-control flex place-content-center">
                                <input type="submit"
                                    value="Offer"
                                    className="text-xl font-Rancho 
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

export default Offer;