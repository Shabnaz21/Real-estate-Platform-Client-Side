import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { IoPeopleCircleOutline } from "react-icons/io5";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;   
        }

    })
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch((error) => {
                console.error('Error marking user as admin:', error);
            });
    }
    const handleMarkAsAgent = (user) => {
        axiosSecure
            .patch(`/users/agent/${user._id}`)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} marked as Agent!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error('Error marking user as agent:', error);
            });
    };

    const handleMarkAsFraud = (user) => {
        axiosSecure.patch(`/users/fraud/${user._id}`)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} marked as Fraud!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error('Error marking user as fraud:', error);
            });
    };
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    axiosSecure.delete(`/users/${user._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            });
    }
    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Manage User| NewVilla </title>
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-poppins md:text-[40px]">
                        User Management Center
                    </h2>
                    <p className="text-base px-10 text-body-color mb-5">
                        Assign admin or agent roles, and efficiently handle user status.
                        Simplify user management with just a few clicks.
                    </p>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-36">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">

                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User Info
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Make Admin
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Make Agent
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Mark as Fraud
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => <tr key={user._id}
                            >
                                <td className="w-4 p-4">{index + 1}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div><img src={user.image} alt={user.name} className="w-16 h-16 rounded" /></div>
                                        <div className="font-bold text-md">{user.name}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4 font-bold text-[16px]">
                                    {user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
                                     text-gray-900 focus:outline-none
                                      bg-[#0E7490] rounded-lg border border-gray-200
                                      hover:bg-[#0E7490]  focus:z-10 focus:ring-4
                                     focus:ring-gray-200">
                                        <FaUsers className="text-white hover:text-black 
                                        text-2xl"></FaUsers>
                                    </button>}

                                </td>
                                <td className="px-6 py-4 font-bold text-[16px]">
                                    {user.role === 'agent' ? (
                                        'AGENT'
                                    ) : (
                                        <button
                                            onClick={() => handleMarkAsAgent(user)}
                                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
                                     text-white focus:outline-none
                                      bg-[#b8a0a0] rounded-lg border border-gray-200
                                      hover:bg-red-600  focus:z-10 focus:ring-4
                                     focus:ring-gray-200"
                                        >
                                            <IoPeopleCircleOutline className="text-white 
                                               text-2xl"></IoPeopleCircleOutline>
                                        </button>
                                    )}
                                </td>
                                <td className="px-6 py-4 font-bold text-red-500 text-[16px]">  {user.role === 'fraud' ? (
                                    'FRAUD'
                                ) : (
                                    <button
                                        onClick={() => handleMarkAsFraud(user)}
                                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
                                     text-white focus:outline-none
                                      bg-red-500 rounded-lg border border-gray-200
                                      hover:bg-red-600  focus:z-10 focus:ring-4
                                     focus:ring-gray-200"
                                    >
                                        Mark as Fraud
                                    </button>
                                )}
                                </td>
                                <td className="flex items-center px-6 py-10 ">
                                    <button type="button"
                                        onClick={() => handleDeleteUser(user)}
                                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
                                     text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200
                                      hover:bg-gray-100  focus:z-10 focus:ring-4
                                     focus:ring-gray-200">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Users;