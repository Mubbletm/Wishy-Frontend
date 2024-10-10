import { Item } from "./item"

export interface Wishlist {
    id: string,
    name: string,
    permission?: 'EDIT' | 'VIEW'
    items?: Item[]
}