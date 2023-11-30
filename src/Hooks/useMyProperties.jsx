import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useMyProperties = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const { refetch, data: myProperties = [] } = useQuery({
        queryKey: ['myProperties', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/properties?agentEmail=${user?.email}`);
            return res.data;
        }
    })

    return [myProperties, refetch]

};

export default useMyProperties;