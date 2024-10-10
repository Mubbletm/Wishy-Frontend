import { useQuery } from "@tanstack/react-query";
import { useApiUrl } from "../http/useApiUrl";
import { useAuthorizationHeaders } from "../http/useAuthorizationHeaders";
import { Wishlist } from "../../../interfaces/wishlist";

export function useWishlists() {
    const apiUrl = useApiUrl();
    const headers = useAuthorizationHeaders();

    return useQuery({
        queryKey: ['wishlists'],
        queryFn: async (): Promise<Wishlist[]> => {
            const response = await fetch([apiUrl, 'wishlist'].join('/'), {headers})
            return await response.json();
        }
    })
    
}