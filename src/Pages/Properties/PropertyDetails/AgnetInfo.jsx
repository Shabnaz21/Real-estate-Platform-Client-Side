import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const AgnetInfo = ({ PropertyData }) => {
    return (
        <>
        <div className="px-2 py-20 mt-16 flex flex-col 
            justify-center items-center
            text-center border-2 rounded-lg mx-20 border-red-500">
                <img className="inline-flex object-cover border-4 
            border-red-500 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)]
             shadow-red-600/100 
              bg-red-500  text-red-500  h-24 w-24 "
                    src={PropertyData?.agentInformation?.agentImage} alt={PropertyData?.agentInformation?.agentName} />
                
                <div className='space-y-2 mb-5'>
                    <h2 className="text-2xl text-gray-500 font-bold mt-4">
                        {PropertyData?.agentInformation?.agentName}
                    </h2>
                    <p> {PropertyData?.agentInformation?.agentEmail}</p>
                    <p className='text-lg font-semibold' > {PropertyData?.agentInformation?.agentPhone}</p>
                </div>
                <ul className="flex flex-row mt-2 text-2xl text-red-600">
                    <li className="mx-2">
                        <a href="">
                           <FaTwitter/> </a>
                    </li>
                    <li className="mx-2">
                        <a href="">
                           <FaFacebook/> </a>
                    </li>
                    <li className="mx-2">
                        <a href="">
                           <FaLinkedin/> </a>
                    </li>
                    <li className="mx-2">
                        <a href="">
                           <FaGithub/> </a>
                    </li>
            </ul>
            </div>
           
        </>
    );
};

export default AgnetInfo;