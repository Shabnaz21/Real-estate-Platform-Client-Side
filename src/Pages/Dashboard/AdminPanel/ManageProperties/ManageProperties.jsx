import { Helmet } from "react-helmet-async";
import useProperties from "../../../../Hooks/useProperties";
import ManagePropertiesRow from "./ManagePropertiesRow";

const ManageProperties = () => {
    const [properties, refetch] = useProperties();
    console.log(properties);
    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Properties Manage | NewVilla </title>
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-poppins md:text-[40px]">
                      Properties Management Center
                    </h2>
                    <p className="text-base px-10 text-body-color mb-5">
                        Streamline property management with the Properties Management Center. Review, verify, and reject agent-added properties in a centralized hub. Easily confirm listings for display on the platform,
                        ensuring accuracy and quality.
                    </p>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
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
                                Property Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Agent Info
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price Rage
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            properties.map(item => <ManagePropertiesRow
                                key={item._id}
                                properties={item}
                                refetch={refetch}
                            ></ManagePropertiesRow>

                            
                                )
                        }
                    </tbody>
                </table>
            </div>
        
        </section>
    );
};

export default ManageProperties;