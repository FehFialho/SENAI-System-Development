import { Request, Response, NextFunction } from "express"
import mongoose from "mongoose"

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

export function validateBodyNotEmpty(req: Request, res: Response, next: NextFunction) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: 'Envie pelo menos um campo'
    })
  }

  next()
}

export function validateObjectIdParam(paramName: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    let value = req.params[paramName];

    // Se o parâmetro veio como array, pega o primeiro
    if (Array.isArray(value)) {
      value = value[0];
    }

    if (!value || !mongoose.Types.ObjectId.isValid(value)) {
      return res.status(400).json({
        message: `Parâmetro "${paramName}" inválido`
      });
    }

    next();
  };
}