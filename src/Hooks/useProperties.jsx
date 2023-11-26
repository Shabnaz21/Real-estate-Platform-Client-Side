import { useEffect, useState } from "react";
import useAxios from "./useAxios";



const useProperties = () => {
    const axios = useAxios();
    const [properties, setProperties] = useState([]);
    const [loading, SetLoading] = useState(true);
   

    const url = `/properties`
    useEffect(() => {
        axios.get(url)
            .then(data =>
                setProperties(data?.data)
            )
    }, [url, axios])
    
    return [properties,loading]
};

export default useProperties;