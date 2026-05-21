import { Request, Response } from "express";
import Product from "../models/Product";
import { filterProductDTO, registerProductDTO } from "../dto/productDTO";
import { register } from "../services/product.service";

class ProductController {

    static async filter(req: Request, res: Response) {
        try {
            // ARRUMAR

        //     const data: filterProductDTO = req.query
        //     const product = await register(data)

        //     return res.status(200).json({
        //         total: products.length,
        //         products
        //     });

        // } catch (error: any) {
        //     return res.status(500).json({
        //         message: 'Erro ao buscar produtos',
        //         error: error.message
        //     });
        }
    }

    // ----------- OUTROS --------------

    // POST
    static async registerProduct(req: Request, res: Response) {
        
        const data: registerProductDTO = req.body

        try {

            const product = await register(data)
            
            // Recarrega sem __v
            const productWithoutV = await Product.findById(product.id).select('-__v');

            return res.status(201).json({
                message: "Produto criado com sucesso",
                product: productWithoutV
            });
        } catch (error: any) {
            return res.status(400).json({
                message: "Erro ao criar produto",
                error: error.message
            });
        }
    }
    
    // GET
    static async getProducts(req: Request, res: Response) {
        try {
            const products = await Product.find().select('-__v'); // remove __v

            return res.status(200).json({
                total: products.length,
                products
            });
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar produtos"
            });
        }
    }

    // GET BY ID
    static async getProductById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await Product.findById(id).select('-__v'); // remove __v

            if (!product) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }

            return res.status(200).json({ product });
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar produto"
            });
        }
    }

    // PUT
    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, description, price, stock, category } = req.body;

            const product = await Product.findByIdAndUpdate(
                id,
                { name, description, price, stock, category },
                { returnDocument: 'after', runValidators: true }
            ).select('-__v'); // remove __v

            if (!product) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }

            return res.status(200).json(product);
        } catch (error: any) {
            return res.status(500).json({
                message: 'Erro ao atualizar produto',
                error: error.message
            });
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