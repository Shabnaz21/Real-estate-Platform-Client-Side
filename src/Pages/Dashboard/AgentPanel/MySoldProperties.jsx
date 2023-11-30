import { Checkbox, Table } from "flowbite-react";
import { Helmet } from "react-helmet-async";

const MySoldProperties = () => {

    return (
        <>
            <section className='container mx-auto m-10'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Sold Properties | NewVilla </title>
                </Helmet>
                <div className='container mx-auto mt-20'>
                    <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                        <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-poppins md:text-[40px]">
                            My Sold Properties
                        </h2>
                    </div>
                </div>
                <div className="relative overflow-x-auto shadow-md mt-10  sm:rounded-lg">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>
                                <Checkbox />
                            </Table.HeadCell>
                            <Table.HeadCell>
                                property Info
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Property location
                            </Table.HeadCell>
                            <Table.HeadCell>
                                buyer Info
                            </Table.HeadCell>
                            <Table.HeadCell>
                                sold price
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {/* TODO */}
                        </Table.Body>
                    </Table>
                </div>
            </section>
        </>
    );
};

export default MySoldProperties;