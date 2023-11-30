import { Checkbox, Table } from "flowbite-react";
import { Link } from "react-router-dom";


const ManageReviewsRow = ({ review, handleDelete }) => {
    const { _id,  reviewerImage, reviewerEmail, reviewDescription, reviewerName} = review;

    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                    <Checkbox />
                </Table.Cell>
                <Table.Cell>
                    <div className="flex items-center gap-4 ">
                        <div><img src={reviewerImage} alt={reviewerName} className="w-14 h-12 rounded " /></div>
                        <div className="font-bold text-md">{reviewerName}</div>
                    </div>
                </Table.Cell>
                <Table.Cell>
                    {reviewerEmail}
                </Table.Cell>
                <Table.Cell>
                    <p className="mx-48 text-center">{reviewDescription}</p>
                </Table.Cell>
                <Table.Cell>
                    <Link> <button 
                        onClick={() => handleDelete(_id)}
                        className="font-medium btn btn-sm text-red-600 mx-10 dark:text-red-500 hover:underline"
                    > Remove
                    </button></Link>
                </Table.Cell>
            </Table.Row> 
        </>
    );
};

export default ManageReviewsRow;