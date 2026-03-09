import { Request, Response, NextFunction } from "express"
import mongoose from "mongoose"

// export function validateFieldsType(fields: Field[]) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     if (!req.body) {
//       return res.status(400).json({ message: "Body vazio" });
//     }

//     for (const field of fields) {
//       const value = req.body[field.name];

//       if (value === undefined) {
//         return res.status(400).json({ message: `Campo obrigatório: ${field.name}` });
//       }

//       if (field.type === "string" && typeof value !== "string") {
//         return res.status(400).json({ message: `${field.name} deve ser string` });
//       }

//       if (field.type === "number" && typeof value !== "number") {
//         return res.status(400).json({ message: `${field.name} deve ser number` });
//       }

//       if (field.type === "boolean" && typeof value !== "boolean") {
//         return res.status(400).json({ message: `${field.name} deve ser boolean` });
//       }
//     }

//     next();
//   };
// }


export function validateRequiredFields(req: Request, res: Response, next: NextFunction) {
  
  const { name, price, stock, category } = req.body;

  if ( !name || !price || !stock || !category) {
    res.status(400).json({
      message: `Campos obrigatórios faltando!`
    });
  } else {
    next();
  }
}

export function validateBodyNotEmpty(req: Request, res: Response, next: NextFunction) {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json({
      message: 'Envie pelo menos um campo'
    });
  } else {
    next();
  }
}

export function validateObjectId(req: Request, res: Response, next: NextFunction) {
  let { id } = req.params;

  // Se id veio como array, pega o primeiro
  if (Array.isArray(id)) {
    id = id[0];
  }

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      message: "ID inválido"
    });
  } else {
    next();
  }
}