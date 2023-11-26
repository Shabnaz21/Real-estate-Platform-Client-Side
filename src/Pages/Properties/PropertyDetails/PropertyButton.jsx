import { Button, Modal, Rating } from "flowbite-react";
import { useState } from "react";


const PropertyButton = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className='mx-20 mt-10 space-y-6' >
                <Button className='w-full uppercase text-2xl'
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