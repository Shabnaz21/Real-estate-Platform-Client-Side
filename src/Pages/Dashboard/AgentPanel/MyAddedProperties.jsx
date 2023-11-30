import { Checkbox, Table } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import useMyProperties from "../../../Hooks/useMyProperties";
import AddedPropertiesRow from "./AddedPropertiesRow";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { useState } from "react";

const MyAddedProperties = () => {
    const axios = useAxios();
    const [properties, refetch] = useMyProperties();
    const [lists, setLists] = useState([])

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
                    const url = `/properties/${id}`;
                    axios.delete(url)
                        .then(data => {
                            console.log(data);
                            if (data?.data?.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    `${properties?.propertyTitle} has been deleted.`,
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
    }
    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title> My Added Property | NewVilla </title>
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-poppins md:text-[40px]">
                        All List Your Property
                    </h2>
                    <p className="text-base px-10 text-body-color mb-5">
                        Explore the seamless experience of showcasing your property to a world of potential buyers. Whether
                        it&apos;s a cozy home, a luxurious villa, or a stylish apartment,
                        our platform provides an easy-to-use listing service. List, connect, and close deals hassle-free.
                    </p>
                </div>
                <div className="relative overflow-x-auto shadow-md mt-10  sm:rounded-lg">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>
                                <Checkbox />
                            </Table.HeadCell>
                            <Table.HeadCell>Property Info</Table.HeadCell>
                            <Table.HeadCell>Property location</Table.HeadCell>
                            <Table.HeadCell>Agent Info</Table.HeadCell>
                            <Table.HeadCell>verification status</Table.HeadCell>
                            <Table.HeadCell>Price range</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                properties.map(item => <AddedPropertiesRow
                                    key={item._id}
                                    properties={item}
                                    handleDelete={handleDelete}
                                ></AddedPropertiesRow>)
                            }
                        </Table.Body>
                    </Table>
                </div>

            </div>
        </section>
    );
};

export default MyAddedProperties;