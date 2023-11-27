import { Button, Modal, Rating } from "flowbite-react";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import useWishList from "../../../Hooks/useWishList";


const PropertyButton = ({ PropertyData }) => {
    const { _id, propertyTitle, priceRange, 
propertyImage } = PropertyData;
    const axios = useAxios();
    const navigate = useNavigate();
    const location = useLocation();
    const [openModal, setOpenModal] = useState(false);
    const { user } = useAuth();
    const [,refetch] = useWishList();
    console.log(user);

    const handleAddToCart = () => {
        if (user && user.email) {
            //send wishlist item to the database
            const wishlist = {
                propertyId: _id,
                email: user.email,
                propertyTitle,
                propertyImage,
                priceRange
            }
            axios.post('/wishlist', wishlist)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${propertyTitle} added to your Wishlist`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        // refetch cart to update the cart items count
                        refetch();
                    }

                })

           
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the wishlist?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <>
            <div className='mx-20 mt-10 space-y-6' >
                <Button className='w-full uppercase text-2xl' onClick={handleAddToCart}
                >Add to wishlist</Button>
                <Button onClick={() => setOpenModal(true)}
                    className='w-full uppercase text-2xl'
                >Review</Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Give Feedback</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 ">
                              What do you think of this property?
                            </p>
                            {/* review */}
                            <div className='mx-40'>
                                <Rating size="lg">
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false} />
                                </Rating>
                         </div>
                        </div>
                        <div className='mt-10' >
                            <p className="text-base leading-relaxed text-gray-500 ">
                                Don you have any thoughts you&apos;d like to share?
                            </p>
                            <textarea name="textarea" id="text" cols="20" rows="10" className="mb-10 h-40 w-full 
                    resize-none rounded-md border
                     border-slate-300 p-5 font-semibold text-gray-300" placeholder="Write Your Review"></textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setOpenModal(false)}>Send</Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            Decline
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default PropertyButton;