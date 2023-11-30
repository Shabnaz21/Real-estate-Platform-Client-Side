import { Checkbox, Table } from "flowbite-react";
import { Link } from "react-router-dom";


const AddedPropertiesRow = ({ properties, handleDelete }) => {
    const {_id, propertyImage, propertyTitle, location, agentInformation, status, priceRange } = properties;
    return (
        <>
            <Table.Row className="bg-white">
                <Table.Cell>
                    <Checkbox />
                </Table.Cell>

                <Table.Cell>
                    <div className="flex items-center gap-4">
                        <div><img src={propertyImage}
                            alt={propertyTitle} className="w-16 h-16 rounded" /></div>
                        <div>
                            <div className="font-bold text-md">{propertyTitle}</div>
                        </div>
                    </div>
                </Table.Cell>
                <Table.Cell>
                   { location}
                </Table.Cell>
                <Table.Cell>
                    <div className="flex items-center gap-4">
                        <div><img src={agentInformation?.agentImage}
                            alt={agentInformation?.agentName} className="w-16 h-16 rounded" /></div>
                        <div>
                            <div className="font-bold text-md">{agentInformation?.agentName}</div>
                            <div className="font-bold text-md">{agentInformation?.agentEmail}</div>
                        </div>
                    </div>
                </Table.Cell>
                <Table.Cell>
                    {status}
                </Table.Cell>
                <Table.Cell>
                    {priceRange}
                </Table.Cell>
                <Table.Cell>
                    <div className='flex flex-col'>
                        <Link
                            to={`/dashboard/update-property/${_id}`}
                        >
                            <button className="font-medium btn btn-sm
                         text-blue-600 dark:text-blue-500 hover:underline">Update Property</button>

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

export default AddedPropertiesRow;