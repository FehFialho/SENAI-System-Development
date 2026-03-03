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

    static async getProductById(req: Request, res: Response){
        try {
            const {id} = req.params;
            const product = await Product.findById(id);

            if (!product) {
            return res.status(404).json({
                message: "Produto não encontrado"
            });
            }

            return res.status(200).json({
                product
            });

        } catch (error) {
            return res.status(500).json({
                message: `Erro ao buscar produto`
            });
        }
    }

}

export default ProductController