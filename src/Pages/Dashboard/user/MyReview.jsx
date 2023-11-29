import { Checkbox, Table } from "flowbite-react";
import useReview from "../../../Hooks/useReview";
import ReviewRow from "./ReviewRow";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useState } from "react";

const MyReview = () => {
    const axios = useAxios();
    const [lists, setLists] = useState([])
    const [reviews, refetch] = useReview();
    console.log(reviews);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const url = `/reviews/${id}`;
                    axios.delete(url)
                        .then(data => {
                            console.log(data);
                            if (data?.data?.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'The reviews has been deleted.',
                                    'success'
                                );
                            }
                            const remaining = lists.filter(list => list._id !== id);
                            setLists(remaining);
                            refetch();
                        })
                        .catch(error => {
                            console.error("Error deleting property:", error);

                        });
                }
            });
    };
    return (
        <>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 mb-10
                     text-gray-800">My Reviews</h1>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>
                                    <Checkbox />
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    property title
                                </Table.HeadCell>
                                <Table.HeadCell>
                                  agent Info
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    review time
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <p className="text-center">review description</p> 
                                </Table.HeadCell>
                                <Table.HeadCell>
                                  action
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    reviews.map(item => <ReviewRow
                                        key={item._id}
                                        review={item}
                                        handleDelete={handleDelete}
                                    ></ReviewRow>)
}
                            </Table.Body>
                        </Table>

                        </div>
                </div>
            
            </div>
        </>
    );
};

export default MyReview;