import { useQuery } from "@tanstack/react-query";
import { useApiUrl } from "../http/useApiUrl";
import { useAuthorizationHeaders } from "../http/useAuthorizationHeaders";
import { Wishlist } from "../../../interfaces/wishlist";
import { Item } from "../../../interfaces/item";

export function useWishlist(id: string, fetchItems: boolean = true) {
    const apiUrl = useApiUrl();
    const headers = useAuthorizationHeaders();

    return useQuery({
        queryKey: ['wishlist', id, fetchItems],
        queryFn: async (): Promise<Wishlist> => {
            const wishlistResponse = (async () => (await fetch([apiUrl, 'wishlist', id].join('/'), {headers})).json())();
            const itemResponse = fetchItems ? (async () => (await fetch([apiUrl, 'wishlist', id, 'items'].join('/'), {headers})).json())() : undefined;
            const [wishlist, items] = (await Promise.all([wishlistResponse, itemResponse])) as [Wishlist, Item[] | undefined];
            wishlist.items = items;
            return wishlist;
        }
    });
}