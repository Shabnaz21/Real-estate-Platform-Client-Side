import { Helmet } from "react-helmet-async";
// import useAxios from "../../../Hooks/useAxios";
// import useAuth from "../../../Hooks/useAuth";

const Wishlist = () => {
    // const axios = useAxios();
    // const { user } = useAuth();
    // const userEmail = user?.email
    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlists | NewVilla </title>
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-poppins md:text-[40px]">
                        Your Dream Collection (Wishlist)
                    </h2>
                    <p className="text-base px-10 text-body-color mb-5">
                        Explore and manage the properties you&apos;ve
                        fallen in love with. Your wishlist, a curated collection of dream homes and investment gems
                    </p>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox"
                                        className="w-4 h-4 text-blue-600
                                         bg-gray-100 border-gray-300 rounded" />
                                    <label className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Property Info
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Agent Info
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Verification Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // map
                        }
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default Wishlist;