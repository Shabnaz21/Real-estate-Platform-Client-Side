import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { MdVerified } from "react-icons/md";
import { useState } from "react";
import { Avatar, Checkbox, Table } from "flowbite-react";

const ManagePropertiesRow = ({ properties }) => {
    const axiosSecure = useAxios();
    const [status, setStatus] = useState(properties.status)
    const { _id, location, propertyTitle, propertyImage, agentInformation, priceRange } = properties;

    const handleVerify = () => {
        axiosSecure.patch(`/properties/${_id}`, { status: 'verified' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setStatus('verified')
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${propertyTitle} is an Verify Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch((error) => {
                console.error('Error marking user as Property:', error);
            }); 
      
    }  

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
                    <div className="flex items-center gap-4">
                        <div><img src={agentInformation?.agentImage}
                            alt={agentInformation?.agentName} className="w-16 h-16 rounded" /></div>
                        <div>
                            <div className="font-bold text-md">{agentInformation?.agentName}</div>
                            <div className="font-bold text-md">{agentInformation?.agentPhone}</div>
                        </div>
                    </div>
                </Table.Cell>
                <Table.Cell>
                    {priceRange}
                </Table.Cell>
                <Table.Cell>
                    {
                        status === 'pending' ? (
                            <button
                                type="button"
                                onClick={() => handleVerify(_id)}
                                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200"
                            >
                                <p className="text-blue-600 text-md">Pending</p>
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200"
                            >
                                <MdVerified className="text-blue-600 text-lg"></MdVerified>
                            </button>
                        )
                    }
                </Table.Cell>
            </Table.Row>
        </>
    );
};

export default ManagePropertiesRow;