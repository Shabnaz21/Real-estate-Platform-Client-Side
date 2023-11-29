import { Checkbox, Table } from "flowbite-react";
import { Link } from "react-router-dom";


const ReviewRow = ({ review, handleDelete }) => {
    const { _id, propertyTitle, reviewDate, reviewDescription, agentName, agentImage } = review;

    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                    <Checkbox />
                </Table.Cell>
                <Table.Cell>
                    {propertyTitle}
                </Table.Cell>
                <Table.Cell>
                    <div className="flex items-center gap-4">
                        <div><img src={agentImage} alt={agentName} className="w-16 h-16 rounded" /></div>
                        <div className="font-bold text-md">{agentName}</div>
                    </div>
                </Table.Cell>
                <Table.Cell>
                    {reviewDate}
                </Table.Cell>
                <Table.Cell>
                    <p className="mx-40">{reviewDescription}</p>
                </Table.Cell>
                <Table.Cell>
                    <Link> <button
                        onClick={() => handleDelete(_id)}
                        className="font-medium btn btn-sm text-red-600 dark:text-red-500 hover:underline"
                    > Remove
                    </button></Link>
                </Table.Cell>
            </Table.Row> 
        </>
    );
};

export default ReviewRow;