import { Request, Response } from "express";
import Product from "../models/Product";

class ProductController {

    // POST
    static async registerProduct(req: Request, res: Response){
        const { name, description, price, stock, category } = req.body;
        
        try {
            const product = new Product({
            name,
            description,
            price,
            stock,
            category
            });

            await product.save();

            return res.status(201).json({
            message: "Produto criado com sucesso",
            product
            });

        } catch (error) {
            return res.status(400).json({
            message: "Erro ao criar produto",
            error
            });
        }
    }
    
    // GET
    static async getProducts(req: Request, res: Response){
        try 
        {
            const products = await Product.find();

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

    // GET
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

    // PUT
    static async update(req: Request, res: Response) {

        try {
            const { id } = req.params
            const { name, description, price, stock, category } = req.body;

            const product = await Product.findByIdAndUpdate(
            id,
            {
                name,
                description,
                price,
                stock,
                category
            },
            {
                returnDocument: 'after', // Retoorna apos a atualizacao
                runValidators: true
            }
            )

            if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado' })
            }

            return res.status(200).json(product)

        } 
        catch (error: any) {
            return res.status(500).json({
            message: 'Erro ao atualizar produto',
            error: error.message
            })
        }
    }

    // DELETE
    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            const product = await Product.findByIdAndDelete(id)
    
            if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado' })
            }
    
            return res.status(200).json({
            message: 'Produto deletado com sucesso',
            deletedProduct: product
            })
    
        } catch (error: any) {
            return res.status(500).json({
            message: 'Erro ao deletar produto',
            error: error.message
            })
        }
        }
}

export default ProductController