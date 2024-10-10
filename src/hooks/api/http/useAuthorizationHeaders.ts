import { useAuthorization } from "./useAuthorization";

export function useAuthorizationHeaders(headers?: Headers) {
    const key = useAuthorization();
    if (!headers) {
        headers = new Headers();
    }
    headers.set('Authorization', `Bearer ${key}`);
    return headers;
}