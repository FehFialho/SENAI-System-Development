export interface registerProductDTO {
    name: string
    description: string
    price: number
    stock: number
    category: string
}

export interface filterProductDTO {
    name?: string
    description?: string
    price?: number
    inStock?: boolean
    category?: string
    minPrice: number
    maxPrice: number
}