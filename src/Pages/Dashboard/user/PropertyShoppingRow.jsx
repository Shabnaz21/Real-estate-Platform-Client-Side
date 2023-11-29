import { Avatar, Table } from "flowbite-react";
import { Link } from "react-router-dom";


const PropertyShoppingRow = ({ offerCard }) => {
    const { _id, agentInformation, location, offerPrice,
        propertyImage, propertyTitle, status} = offerCard;

    return (
        <>
            <Table.Row className="bg-white">
                <Table.Cell>
                    <Avatar img={propertyImage} alt={propertyTitle} size="lg">
                        <div className="font-bold font-lg">{propertyTitle}</div>
                    </Avatar>
                </Table.Cell>
                <Table.Cell>
                    {location}
                </Table.Cell>
                <Table.Cell>
                    <div>
                        <p>{agentInformation?.agentName}</p>
                        <p>{agentInformation?.agentEmail}</p>
                    </div>
                </Table.Cell>
                <Table.Cell>
                    {offerPrice}
                </Table.Cell>
                <Table.Cell>
                    {status}
                </Table.Cell>
                <Table.Cell>
                    {
                      status === 'Pending' ? (
                            ''
                        ) : (
                                <Link
                                    to={`/dashboard/payment/${_id}`}
                                >
                                    <button
                                        className="font-medium btn btn-sm
                         text-red-500 hover:underline">Pay Now</button>
                                </Link>
                        )
                  }
                </Table.Cell>

            </Table.Row>
        </>
    );
};

export default PropertyShoppingRow;