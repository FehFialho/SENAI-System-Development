import { Request, Response, NextFunction, response } from "express";
import User from "../models/User";

export const validateUserRegister = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, type } = req.body

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

    next();
}

export const validateUserUpdate = async (req: Request, res: Response, next: NextFunction) => {


    next();
}