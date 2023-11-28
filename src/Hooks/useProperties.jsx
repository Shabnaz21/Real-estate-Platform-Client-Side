import { useState } from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useProperties = () => {
    const axios = useAxios();
    const [loading, SetLoading] = useState(true);
   
    const { user } = useAuth();
    const { refetch, data: properties = [] } = useQuery({
        queryKey: ['properties', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/properties`);
            return res.data;
        }
    })
    
    return [properties,loading,refetch ]
};

export default useProperties;