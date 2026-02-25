import express, { Request, response, Response, Router } from 'express';
import User from '../models/user';

const router = express.Router();

router  
    .post('/register', async (req: Request, res: Response) => {
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
    })

    .get('/users', async (_req: Request, res: Response) => {
    try {
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

    } catch (error) {
        return res.status(500).json({
        message: "Erro ao buscar usuários"
        });
    }
    })

    .get('/users/:id', async (req: Request, res: Response) => {
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
    });

export default router;