export interface MenuItems {
    id: number,
    name: string
    slug: string,
    type: string,
    description: string
    price: string
    media: {
        id:number
        url:string
    }[]
}