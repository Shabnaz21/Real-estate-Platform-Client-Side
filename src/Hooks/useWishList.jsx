
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useWishList = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/wishlist?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useWishList;