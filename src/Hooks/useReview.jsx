import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useReview = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const { refetch, data: reviews = [] } = useQuery({
        queryKey: ['reviews', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/reviews?reviewerEmail=${user?.email}`);
            return res.data;
        }
    })

    return [reviews, refetch]


};

export default useReview;