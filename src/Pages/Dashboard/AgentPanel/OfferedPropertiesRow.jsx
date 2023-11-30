import { Checkbox, Table } from "flowbite-react";
import { MdVerified } from "react-icons/md";

// TODO

const OfferedPropertiesRow = ({ proposal, handleVerify, status }) => {
    const { _id, propertyTitle, propertyImage, location, offerPrice, userEmail, userName, userPhoto } = proposal;
    
    return (
        <>
            <Table.Row className="bg-white">
                <Table.Cell>
                    <Checkbox />
                </Table.Cell>
                <Table.Cell>
                    <div className="flex items-center gap-4 ">
                        <div><img src={propertyImage} alt={propertyTitle} className="w-14 h-12 rounded " /></div>
                        <div className="font-bold text-md">{propertyTitle}</div>
                    </div>
                </Table.Cell>
                <Table.Cell>
                   {location}
                </Table.Cell>
                <Table.Cell>
                    <div className="flex items-center gap-4 ">
                        <div><img src={userPhoto} alt={userName} className="w-14 h-12 rounded " /></div>
                        <div className="font-bold text-md">{userName}</div>
                        <div className="font-bold text-md">{userEmail}</div>
                    </div>
                </Table.Cell>
                <Table.Cell>
                    {offerPrice}
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

export default OfferedPropertiesRow;