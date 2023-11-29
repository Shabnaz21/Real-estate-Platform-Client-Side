import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useProposal = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const { refetch, data: offer = [] } = useQuery({
        queryKey: ['offer', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/proposal?userEmail=${user?.email}`);
            return res.data;
        }
    })

    return [offer, refetch]
};

export default useProposal;