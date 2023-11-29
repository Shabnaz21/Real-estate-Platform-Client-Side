import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useWishList from "../../../Hooks/useWishList";
import WishlistRow from "./WishlistRow";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { Checkbox, Table } from "flowbite-react";


const Wishlist = () => {
    const axios = useAxios();
    const [cart, refetch] = useWishList();
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
                const url = `/wishlist/${id}`;
                axios.delete(url)
                    .then(data => {
                        console.log(data);
                        if (data?.data?.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The wishlist has been deleted.',
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
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlists | NewVilla </title>
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-poppins md:text-[40px]">
                        Your Dream Collection (Wishlist)
                    </h2>
                    <p className="text-base px-10 text-body-color mb-5">
                        Explore and manage the properties you&apos;ve
                        fallen in love with. Your wishlist, a curated collection of dream homes and investment gems
                    </p>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            <Checkbox />
                        </Table.HeadCell>
                       
                        <Table.HeadCell>
                            Property Info
                        </Table.HeadCell>
                        <Table.HeadCell>Location</Table.HeadCell>
                        <Table.HeadCell>    Agent Info</Table.HeadCell>
                        <Table.HeadCell>PRICE</Table.HeadCell>
                        <Table.HeadCell>VERIFICATION STATUS</Table.HeadCell>
                        <Table.HeadCell>	ACTION</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            cart.map(item => <WishlistRow
                                key={item._id}
                                Wishlist={item}
                                handleDelete={handleDelete}
                            ></WishlistRow>)
                        }
                    </Table.Body>
                </Table>
                
            </div>

        </section>
    );
};

export default Wishlist;