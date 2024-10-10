export function useJsonHeaders(headers?: Headers) {
    if (!headers) {
        headers = new Headers();
    }
    headers.set('Content-Type', 'application/json');
    return headers;
}