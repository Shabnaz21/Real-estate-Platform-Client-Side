import { Table } from "flowbite-react";
import useProposal from "../../../Hooks/useProposal";
import PropertyShoppingRow from "./PropertyShoppingRow";

const PropertyBought = () => {
    const [offer] = useProposal();
    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9
                     text-gray-800">Order</h1>
            </div>
            <div className="relative overflow-x-auto shadow-md mt-10  sm:rounded-lg">
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
    );
};

export default PropertyBought;