import { Avatar, Button } from 'flowbite-react';
import { FaRegHeart } from 'react-icons/fa';
import { IoLocationOutline, IoPricetag } from 'react-icons/io5';
import { MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PropertyCard = ({ property }) => {
    const { _id, propertyImage, priceRange, propertyTitle, agentInformation, location } = property;

    return (
        <div className='flex flex-col gap-2 shadow-lg max-h-[500px] rounded-xl
              lg:w-[375px] w-[350px]'>
            <div
                className='aspect-square w-full h-56
                            relative overflow-hidden rounded-t-xl'>
                <img className='object-cover '
                    src={propertyImage} alt='Property' />
                <div className='absolute top-3 right-3'>
                    <MdVerified className="text-2xl text-red-500" />
                </div>
            </div>
            {/* agents */}
            <div className="pl-5 pr-4 flex justify-between items-center">
                <Avatar img={agentInformation.agentImage} size="md" className="justify-start"
                    bordered color="pink" rounded>
                    <div className="space-y-1 font-medium dark:text-white">
                        <p className="text-lg font-extrabold">{agentInformation.agentName}</p>
                    </div>
                </Avatar>
                <div className="text-xl text-red-500">
                    <FaRegHeart />
                </div>
            </div>
            {/* details */}
            <div className="p-5 space-y-2">
                <div className='font-semibold text-xl'>{propertyTitle}</div>
                <div className="flex gap-3 items-center">
                    <IoPricetag className="text-lg" />
                    <p> $ {priceRange}</p>
                </div>
                <div className="flex gap-3 items-center">
                    <IoLocationOutline className="text-lg" />
                    <p>{location} </p>
                </div>
            </div>
            <Link to={`/property-details/${_id}`}>
                <div className="pb-5 flex place-content-center">
                    <Button className="w-1/2">
                        Details
                    </Button>
                </div>
            </Link>
        </div>
    );
};
PropertyCard.propTypes = {
    property: PropTypes.object,
}
export default PropertyCard;