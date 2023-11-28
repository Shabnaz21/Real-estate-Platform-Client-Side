import { Helmet } from "react-helmet-async";
import useProperties from "../../../../Hooks/useProperties";
import ManagePropertiesRow from "./ManagePropertiesRow";
import { Checkbox, Table } from "flowbite-react";

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
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            <Checkbox />
                        </Table.HeadCell>

                        <Table.HeadCell>
                            Property Info
                        </Table.HeadCell>
                        <Table.HeadCell>Property Location

                        </Table.HeadCell>
                        <Table.HeadCell>    Agent Info</Table.HeadCell>
                        <Table.HeadCell> Price Rage</Table.HeadCell>
                        <Table.HeadCell>ACTION</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            properties.map(item => <ManagePropertiesRow
                                key={item._id}
                                properties={item}
                                refetch={refetch}
                            ></ManagePropertiesRow>


                            )
                        }
                    </Table.Body>
                </Table>
              
            </div>
        
        </section>
    );
};

export default ManageProperties;