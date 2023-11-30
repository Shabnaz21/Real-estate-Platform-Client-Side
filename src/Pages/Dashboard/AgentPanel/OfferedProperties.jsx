import { Checkbox, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// import useProposal from "../../../Hooks/useProposal";
import OfferedPropertiesRow from "./OfferedPropertiesRow";
import useAxios from "../../../Hooks/useAxios";

const OfferedProperties = () => {


//Not Proper Work. Need to time invest!

    const axios = useAxios();
    const [proposal, setProposal] = useState([]);
    // const [refetch] = useProposal();
    // const [lists, setLists] = useState([])
    const [status, setStatus] = useState(proposal.status)
    useEffect(() => {
        axios.get(`/proposal?}`)
            .then(res => {
                setProposal(res?.data);

            })
    }, [axios])

    const handleVerify = () => {
        axios.patch(`/proposal/${proposal._id}`, { status: 'verified' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setStatus('verified')
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${proposal.propertyTitle} is an Verify Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch((error) => {
                console.error('Error marking user as Property:', error);
            });

    } 
    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Offered List | NewVilla </title>
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-poppins md:text-[40px]">
                        Offered List of Your Property
                    </h2>
                </div>
                <div className="relative overflow-x-auto shadow-md mt-10  sm:rounded-lg">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>
                                <Checkbox />
                            </Table.HeadCell>
                            <Table.HeadCell>Property Info</Table.HeadCell>
                            <Table.HeadCell>Property location</Table.HeadCell>
                            <Table.HeadCell>Buyer Info</Table.HeadCell>
                            <Table.HeadCell>Offer range</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                proposal.map(item => <OfferedPropertiesRow
                                    key={item._id}
                                    proposal={proposal}
                                    handleVerify={handleVerify}
                                    status={status}
                                ></OfferedPropertiesRow>)   
                         }
                            
                        </Table.Body>
                    </Table>
                </div>

            </div>
        </section>
    );
};

export default OfferedProperties;