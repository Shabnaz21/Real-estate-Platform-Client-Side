
const PropertyInfo = ({ PropertyData }) => {
    return (
        <div className='col-span-4 flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
                <div
                    className='
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            '
                >
                    <div>Hosted by {PropertyData.host.name}</div>

                    <img
                        className='rounded-full'
                        height='30'
                        width='30'
                        alt='Avatar'
                        src={PropertyData.host.image}
                    />
                </div>
                <div
                    className='
              flex 
              flex-row 
              items-center 
              gap-4 
              font-light
              text-neutral-500
            '
                >
                    <div>{PropertyData.guests} guests</div>
                    <div>{PropertyData.bedrooms} rooms</div>
                    <div>{PropertyData.bathrooms} bathrooms</div>
                </div>
            </div>

            <hr />
            <div
                className='
        text-lg font-light text-neutral-500'
            >
                {PropertyData.description}
            </div>
            <hr />
        </div>
    )
};

export default PropertyInfo;