import { Table } from "flowbite-react";
import useProposal from "../../../Hooks/useProposal";
import PropertyShoppingRow from "./PropertyShoppingRow";

const PropertyBought = () => {
    const [offer] = useProposal();
    return (
        <>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9
                     text-gray-800">Order</h1>
                   
                </div>
                <div className="mt-10 flex flex-col xl:flex-row 
                jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start 
                    items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start items-start 
                       px-4 py-4 md:py-
                        6 md:p-6 xl:p-8 w-full">
                            <p className="text-lg md:text-xl 
                           font-semibold leading-6
                            xl:leading-5 text-gray-800">Customer’s Cart</p>
                            <div className="mt-4 md:mt-6 flex flex-col 
                            md:flex-row justify-start items-start md:items-center
                            relative overflow-x-auto shadow-md sm:rounded-lg ">
                                <Table hoverable>
                                    <Table.Head>
                                        <Table.HeadCell>Property Info</Table.HeadCell>
                                        <Table.HeadCell>Property Location</Table.HeadCell>
                                        <Table.HeadCell>Agent Info</Table.HeadCell>
                                        <Table.HeadCell>Offer Account</Table.HeadCell>
                                        <Table.HeadCell>Status</Table.HeadCell>
                                        <Table.HeadCell>
                                            Payment
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        {
                                            offer.map(item => <PropertyShoppingRow
                                                key={item._id}
                                                offerCard={item}
                                            ></PropertyShoppingRow>)
                                        }
                                    </Table.Body>
                               </Table>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

        </>
    );
};

export default PropertyBought;