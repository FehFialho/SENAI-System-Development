import { filterProductDTO, registerProductDTO } from "../dto/productDTO"
import Product from "../models/Product"

export async function register(data: registerProductDTO){
    const { name, description, price, stock, category } = data
    const createdAt = new Date()
    const product = new Product({name, description, price, stock, category, createdAt } )
    await product.save()
    return product
}


export async function filter(data: filterProductDTO){

    const { name, category, minPrice, maxPrice, inStock } = data

    // Criar objeto de filtro dinâmico
    const filters: any = {};

    // Filtrar por name usando regex, case insensitive
    if (name) {
        filters.name = { $regex: new RegExp(name as string, 'i') };
    }

    // Filtrar por category exata
    if (category) {
        filters.category = category;
    }

    // Filtrar por preço mínimo
    if (minPrice) {
        filters.price = { ...filters.price, $gte: Number(minPrice) };
    }

    // Filtrar por preço máximo
    if (maxPrice) {
        filters.price = { ...filters.price, $lte: Number(maxPrice) };
    }

    // Filtrar apenas produtos com stock > 0 se inStock=true
    if (inStock === true) {
        filters.stock = { $gt: 0 };
    }

    // Buscar produtos com os filtros
    const products = await Product.find(filters).select('-__v');
    return await products

}