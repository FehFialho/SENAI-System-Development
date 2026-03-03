import { Request, Response, NextFunction, response } from "express";
import User from "../models/User";


export function validateRequiredFields(fields: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const missingFields = fields.filter(field => !req.body[field])

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Campos obrigatórios: ${missingFields.join(', ')}`
      })
    }

    next()
  }
}

export const validateDuplicatedEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body
  const { id } = req.params

  if (!email) return next()

  const emailExists = await User.findOne({ email })

  if (emailExists && emailExists._id.toString() !== id) {
    return res.status(400).json({
      message: "Email já está em uso"
    })
  }

  next()
}

// export const validateDuplicatedEmail = async (req: Request, res: Response, next: NextFunction) => {
//     const { name, email, type } = req.body

//     // Verificar email duplicado
//     const emailExists = await User.findOne({ email });

//     if (emailExists) {
//     return res.status(400).json({
//         message: "Email já está em uso"
//     });
//     }

//     next();
// }

export function validateBodyNotEmpty(req: Request, res: Response, next: NextFunction) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: 'Envie pelo menos um campo'
    })
  }

  next()
}