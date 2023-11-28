
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useProfile = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/users?email=${user?.email}`);
            return res.data;
        }
    })

    return [users, refetch]
};

export default useProfile;