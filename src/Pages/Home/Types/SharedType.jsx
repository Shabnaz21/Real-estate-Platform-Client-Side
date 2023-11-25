
const SharedType = ({ icon, PropertyCategory, ProjectCount }) => {
    return (
        <>
            <div className="w-48 h-48 mb-20">
                <div className="bg-white p-8 py-16 flex place-content-center items-center">
                    <p className='text-6xl text-red-500'>{icon}</p>
                </div>
                <div className="mt-5">
                    <h4 className="text-lg font-bold text-center">{PropertyCategory}</h4>
                    <p className="text-md text-red-600 font-bold text-center">{ProjectCount} Properties</p>
                </div>
            </div>
        </>
    );
};

export default SharedType;