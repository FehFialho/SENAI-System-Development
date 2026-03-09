import { NextFunction } from "express"

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