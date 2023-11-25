import { Button } from "flowbite-react";
import { FiPhoneCall } from "react-icons/fi";

const Call = () => {
    return (
        <section className="container mx-auto -bottom-10 relative">
            <div className="bg-[#0E7490] p-10 border-8 border-white text-white  
            md:mx-5 rounded-2xl">
                <div className="flex justify-between flex-col space-y-6 lg:flex-row items-center">
                    <div>
                        <h3 className="text-3xl font-poppins text-center lg:text-left">Find Local Real estate agents</h3>
                    </div>
                    <div className="flex lg:gap-10 gap-2 items-center justify-between">
                        <div className="flex items-center gap-4">
                            <FiPhoneCall className='text-3xl ' />
                            <div>
                                <p className="text-xl font-bold">Phone Number</p>
                                <p>(671) 555-0110</p>
                            </div>
                        </div>
                        <Button className="bg-red-500 hover:bg-red-600 uppercase font-bold">Get a quote</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Call;