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
    });

export default router;