import { Request, Response } from "express";
import Product from "../models/Product";

class ProductController {

    static async getProducts(req: Request, res: Response){
        const { name, description, price, stock, category } = req.body;
        try 
        {
            const products = await Product.find();

            if (products.length === 0) {
            return res.status(200).json({
                message: "Nenhum produto cadastrado",
                products: []
            });
            }

            return res.status(200).json({
            total: products.length,
            products
            });

        }
        catch(error) 
        {
            return res.status(500).json({
            message: "Erro ao buscar produtos"
            });
        }
    }

}

export default ProductController