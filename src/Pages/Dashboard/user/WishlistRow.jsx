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
            {/* <tr className=" bg-white border-b
                          hover:bg-gray-50
                        ">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100
                                     border-gray-300 rounded" />
                        <label className="sr-only">checkbox</label>
                    </div>
                </td>

                <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <Avatar img={propertyImage} alt={propertyTitle} size="xl">
                            <div className="font-bold font-lg">{propertyTitle}</div>
                        </Avatar>
                    </div>
                </td>
                <td className="px-6 py-4">
                    {location}
                </td>
                <td className="px-6 py-4">
                    <Avatar img={agentInformation?.agentImage} alt={agentInformation?.agentName} size="lg">
                        <div className="font-bold font-lg">{agentInformation?.agentName}</div>
                    </Avatar>
                </td>
                <td className="px-6 py-4 text-center">
                    {priceRange}
                </td>
                <td className="px-6 py-4 text-md font-semibold">
                    {
                        status === 'Verified' ? <span className="font-bold text-primary">Un Verified</span> :
                            <button className="btn btn-ghost btn-xs">Verified</button>}
                </td>
                <td className="grid grid-rows-3 items-center px-2 py-10 gap-5 mr-18 place-content-center">
                    <Link
                        to={`/dashboard/make-an-offer/${_id}`}
                    >
                        <button className="font-medium btn btn-sm
                         text-blue-600 dark:text-blue-500 hover:underline">Make An Offer</button>

                    </Link>
                    <Link
                        onClick={() => handleDelete(_id)}
                        className="font-medium btn btn-sm text-red-600 dark:text-red-500 hover:underline">
                        Remove</Link>
                </td>
            </tr> */}
        </>
    );
};

export default WishlistRow;