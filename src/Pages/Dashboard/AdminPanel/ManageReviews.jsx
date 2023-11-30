import { Checkbox, Table } from "flowbite-react";
import useAxios from "../../../Hooks/useAxios";
import { useEffect, useState } from "react";
import ManageReviewsRow from "./ManageReviewsRow";
import Swal from "sweetalert2";
import useReview from "../../../Hooks/useReview";


const ManageReviews = () => {
    const axios = useAxios();
    const [reviews, setReviews] = useState([]);
    const [refetch] = useReview();
    const [lists, setLists] = useState([])
    useEffect(() => {
        axios.get(`/reviews}`)
            .then(res => {
                setReviews(res?.data);
            })
    }, [axios])

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
                                    'The Review has been deleted.',
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
                     text-gray-800">Manage Reviews</h1>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>
                                    <Checkbox />
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    reviewer info
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    reviewer email
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Review
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    action
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    reviews.map(item => <ManageReviewsRow
                                        key={item._id}
                                        review={item}
                                        handleDelete={handleDelete}
                                    ></ManageReviewsRow>)
                                }
                            </Table.Body>
                        </Table>

                    </div>
                </div>

            </div>
        </>
    );
};

export default ManageReviews;