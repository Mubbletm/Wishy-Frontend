
export function useAuthorization() {
    let ownership = localStorage.getItem('ownership')
    if (!ownership) {
        ownership = [...crypto.getRandomValues(new Uint8Array(16))].map(n=>n.toString(16).padStart(2, '0')).join("")
        localStorage.setItem('ownership', ownership)
    }
    return ownership;
}
