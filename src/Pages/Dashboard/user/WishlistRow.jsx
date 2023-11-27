import { Link } from "react-router-dom";


const WishlistRow = () => {
    
    return (
        <>
            <tr className=" bg-white border-b
                          hover:bg-gray-50
                        ">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100
                                     border-gray-300 rounded" />
                        <label className="sr-only">checkbox</label>
                    </div>
                </td>

                <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded-xl w-20 h-20">
                                {/* <img src={foodImage} alt={foodName} /> */}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">foodName</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    {/* {location} */}
                </td>
                <td className="px-6 py-4">
                    {/* Agent Info */}
                    {/* <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded-xl w-20 h-20">
                                <img src={foodImage} alt={foodName} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">foodName</div>
                        </div>
                    </div> */}
                </td>
                <td className="px-6 py-4">
                    {/* {status} */}

                    {/* {
                        status === 'available' ? <span className="font-bold text-primary">Sold</span> :
                            <button className="btn btn-ghost btn-xs">Available</button>} */}
                </td>
                <td className="px-6 py-4 text-center">
                    {/* {donatedMoney} */}
                </td>
                <td className="grid grid-rows-3 items-center px-2 py-10 gap-5 mr-18 place-content-center">
                    <Link
                        // to={`/update-my-food/${_id}`}
                    >
                        <button className="font-medium btn btn-sm
                         text-blue-600 dark:text-blue-500 hover:underline">Make An Offer</button>

                    </Link>
                    <Link
                        // onClick={() => handleDelete(_id)}
                        className="font-medium btn btn-sm text-red-600 dark:text-red-500 hover:underline">
                        Remove</Link>
                </td>
            </tr>
        </>
    );
};

export default WishlistRow;