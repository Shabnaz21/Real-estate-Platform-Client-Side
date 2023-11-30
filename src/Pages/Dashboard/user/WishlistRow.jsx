import { Avatar, Checkbox, Table } from "flowbite-react";
import { Link } from "react-router-dom";


const WishlistRow = ({ Wishlist, handleDelete }) => {
    const { _id, propertyTitle, propertyImage, location, agentInformation, priceRange } = Wishlist;
    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                    <Checkbox />
                </Table.Cell>
                <Table.Cell>
                    <Avatar img={propertyImage} alt={propertyTitle} size="xl">
                        <div className="font-bold font-lg">{propertyTitle}</div>
                    </Avatar>
                </Table.Cell>
                <Table.Cell>
                    {location}
                </Table.Cell>
                <Table.Cell>
                    <Avatar img={agentInformation?.agentImage} alt={agentInformation?.agentName} size="lg">
                        <div className="font-bold font-lg">{agentInformation?.agentName}</div>
                    </Avatar>
                </Table.Cell>
                <Table.Cell>
                    {priceRange}
                </Table.Cell>
                <Table.Cell>
                    {
                        status === 'Verified' ? <span className="font-bold text-primary">Un Verified</span> :
                            <button className="btn btn-ghost btn-xs">Verified</button>}
                </Table.Cell>
                <Table.Cell>
                    <div className='flex flex-col'>
                        <Link
                            to={`/dashboard/make-an-offer/${_id}`}
                        >
                            <button className="font-medium btn btn-sm
                         text-blue-600 dark:text-blue-500 hover:underline">Make An Offer</button>

                        </Link>
                        <Link> <button
                            onClick={() => handleDelete(_id)}
                            className="font-medium btn btn-sm text-red-600 dark:text-red-500 hover:underline"
                        > Remove
                        </button></Link>
                    </div>
                </Table.Cell>
            </Table.Row>
        </>
    );
};

export default WishlistRow;