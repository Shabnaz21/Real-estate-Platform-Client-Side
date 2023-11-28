import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { MdVerified } from "react-icons/md";
import { useState } from "react";

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
            <tr className=" bg-white border-b
                          hover:bg-gray-50
                        ">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100
                                     border-gray-300 rounded" />
                        <label className="sr-only">checkbox</label>
                    </div>
                </td>
                <td scope="col" className="px-6 py-3">
                    <div className="flex items-center gap-4">
                        <div><img src={propertyImage} alt={propertyTitle} className="w-20 h-20 rounded" /></div>
                        <div className="font-bold text-md">{propertyTitle}</div>
                    </div>
                </td>
                <td scope="col" className="px-6 py-3">
                    {location}
                </td>
                <td scope="col" className="px-6 py-3">
                    <div className="flex items-center gap-4">
                        <div><img src={agentInformation?.agentImage} alt={agentInformation ?. agentName} className="w-16 h-16 rounded" /></div>
                        <div>
                            <div className="font-bold text-md">{agentInformation?.agentName}</div>
                            <div className="font-bold text-md">{agentInformation?.agentPhone}</div>
                        </div>
                    </div>
                </td>
                <td scope="col" className="px-6 py-3">
                    {priceRange}
                </td>
                <td scope="col" className="px-6 py-3">
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

                </td>
            </tr>
        </>
    );
};

export default ManagePropertiesRow;