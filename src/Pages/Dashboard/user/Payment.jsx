import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
    const payment = useLoaderData();
    return (
        <section className="container mx-auto mt-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Payment | NewVilla </title>
            </Helmet>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9
                     text-gray-800">Payment Information : {payment?.propertyTitle}</h1></div>
                <div className="mt-10 flex flex-col xl:flex-row 
                jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start 
                    items-start w-9/12 space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start w-full items-start 
                       px-4 py-4 md:py-
                        6 md:p-6 xl:p-8">
                            <div className="mt-4  w-full md:mt-6 flex flex-col 
                            md:flex-row justify-start items-start md:items-center
                            relative overflow-x-auto shadow-md sm:rounded-lg ">
                                <div className="bg-white  w-full rounded-lg shadow-lg p-6">
                    <form>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-sm font-medium
                                         text-gray-700 mb-2">Card Number</label>
                                <input type="text" name="card-number" id="card-number"
                                    placeholder="0000 0000 0000 0000" className="w-full py-3 px-4 border
                                             border-gray-400 rounded-lg focus:outline-none
                                              focus:border-blue-500"/>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                                <input type="text" name="expiration-date" id="expiration-date"
                                    placeholder="MM / YY" className="w-full py-3 px-4 border
                                             border-gray-400 rounded-lg focus:outline-none
                                              focus:border-blue-500"/>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                <input
                                    type="text" name="cvv" id="cvv" placeholder="000"
                                    className="w-full py-3 px-4 border border-gray-400 rounded-lg 
                                            focus:outline-none focus:border-blue-500"/>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
                                <input type="text" name="card-holder" id="card-holder"
                                    placeholder="Full Name" className="w-full py-3 px-4 border
                                             border-gray-400 rounded-lg focus:outline-none
                                              focus:border-blue-500"/>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button type="submit"
                                className="w-full bg-red-500 hover:bg-blue-600
                                         text-white font-medium py-3 rounded-lg
                                         focus:outline-none">Submit</button>
                        </div>
                    </form>
                </div>
                            </div>
                        </div>
                    </div>
                    {/* User details */}
                    <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                        <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                            <div className="flex flex-col justify-start items-start flex-shrink-0">
                                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                    <img src={payment?.userPhoto}
                                className="w-16 h-16"
                                alt="avatar" />
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-base dark:text-white font-semibold leading-4 text-left
                                         text-gray-800">
                                            {payment?.userName}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                    <img className="dark:hidden"
                                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg" alt="email" />
                                    <p className="cursor-pointer text-sm leading-5 ">
                                        {payment?.userEmail}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                <div className="flex justify-center md:justify-start xl:flex-col 
                                    flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4
                                    xl:space-y-12 md:space-y-0 md:flex-row
                                    items-center md:items-start">
                                    <div className="flex justify-center 
                                        md:justify-start items-center md:items-start
                                        flex-col space-y-4 xl:mt-8">
                                        <p className="text-base dark:text-white 
                                            font-semibold leading-4 text-center md:text-left
                                             text-gray-800">Shipping Address</p>
                                        <p className="w-48 lg:w-full dark:text-gray-300 
                                            xl:w-48 text-center md:text-left text-sm leading-5
                                             text-gray-600">
                                            {payment?.billingAddress}
                                        </p>
                                    </div>
                                    <div className="flex justify-center 
                                        md:justify-start items-center md:items-start
                                        flex-col space-y-4">
                                        <p className="text-base dark:text-white font-semibold 
                                            leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                        <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 
                                            text-center md:text-left text-sm leading-5 text-gray-600">
                                            {payment?.billingAddress}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </section>
    );
};

export default Payment;