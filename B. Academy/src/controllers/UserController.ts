import { Request, Response } from "express";
import User from "../models/User";

class UserController {
    static async getUsers(req: Request, res: Response){
        const { name, email, type } = req.body;
        try 
        {
            const users = await User.find();

            if (users.length === 0) {
            return res.status(200).json({
                message: "Nenhum usuário cadastrado",
                users: []
            });
            }

            return res.status(200).json({
            total: users.length,
            users
            });

        }
        catch(error) 
        {
            return res.status(500).json({
            message: "Erro ao buscar usuários"
            });
        }
    }

    static async getUserById(req: Request, res: Response){
        try {
            const {id} = req.params;
            const user = await User.findById(id);

            if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado"
            });
            }

            return res.status(200).json({
                user
            });

        } catch (error) {
            return res.status(500).json({
                message: `Erro ao buscar usuário`
            });
        }
        }

    static async registerUser(req: Request, res: Response){
        
        const { name, email, type } = req.body;

        try {
            // Validação básica
            if (!name || !email || !type) {
            return res.status(400).json({
                message: "Campos obrigatórios: name, email e type"
            });
            }

            // Verificar email duplicado
            const emailExists = await User.findOne({ email });

            if (emailExists) {
            return res.status(400).json({
                message: "Email já está em uso"
            });
            }

            // Criar usuário
            const user = new User({
            name,
            email,
            type
            // isActive e createdAt já têm default no schema
            });

            await user.save();

            return res.status(201).json({
            message: "Usuário criado com sucesso",
            user
            });

        } catch (error) {
            return res.status(400).json({
            message: "Erro ao criar usuário",
            error
            });
        }
    }

    // PUT
    static async replaceById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { name, email, type, isActive } = req.body

            if (!name || !email || !type) {
            return res.status(400).json({
                message: 'name, email e type são obrigatórios'
            })
            }

            const user = await User.findOneAndReplace(
            { _id: id },
            {
                name,
                email,
                type,
                isActive: isActive ?? true,
                createdAt: new Date()
            },
            {
                returnDocument: 'after', // REtorna apos a atualizacao
                runValidators: true
            }
            )

            if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
            }

            return res.status(200).json(user)

        } 
        catch (error: any) {
            return res.status(500).json({
            message: 'Erro ao substituir usuário',
            error: error.message
            })
        }
    }

    // PATCH
    static async updateById(req: Request, res: Response) {
    try {
        const { id } = req.params
        const data = req.body

        if (Object.keys(data).length === 0) {
        return res.status(400).json({
            message: 'Envie pelo menos um campo'
        })
        }

        const user = await User.findByIdAndUpdate(
        id,
        data,
        {
            returnDocument: 'after',
            runValidators: true
        }
        )

        if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
        }

        return res.status(200).json(user)

    } catch (error: any) {
        return res.status(500).json({
        message: 'Erro ao atualizar usuário',
        error: error.message
        })
    }
    }
    
    // DELETE
    static async deleteById(req: Request, res: Response) {
    try {
        const { id } = req.params

        const user = await User.findByIdAndDelete(id)

        if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
        }

        return res.status(200).json({
        message: 'Usuário deletado com sucesso',
        deletedUser: user
        })

    } catch (error: any) {
        return res.status(500).json({
        message: 'Erro ao deletar usuário',
        error: error.message
        })
    }
    }
}

export default UserController