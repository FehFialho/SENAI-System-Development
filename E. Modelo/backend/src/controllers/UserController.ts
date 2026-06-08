import { Request, response, Response } from "express";
import { registerUserDto, updateUserDto } from "../dtos/userDTO";
import { deleteUser, registerUser, showUsers, updateUser } from "../services/user.service";
import { data } from "react-router-dom";

export default class UserController {
    static async create(req: Request, res: Response){
        const data: registerUserDto = req.body
        try{
            await registerUser(data)
            return res.status(200).send({response: 'User registered with success!'})
        }
        catch(error){
            return res.status(500).send({response: 'Server ERROR!  ', error})
        }
    }

    static async show(req: Request, res: Response){
        const {id} = req.params // para by id
        try{
            const users = await showUsers()
            return res.status(200).send(users)
        }
        catch(e){
            return res.status(500).send({response: 'Server ERROR!'})
        }
    }

    static async update(req: Request, res: Response){
        const data: updateUserDto = req.body
        try{
            await updateUser(data)
            return res.status(200).send({response: 'User updated with success!'})
        }
        catch(e){
            return res.status(500).send({response: 'Server ERROR!'})
        }
    }

    static async delete(req: Request, res: Response){
        const { email } = req.params

        try{
            await deleteUser(email as string)
            return res.status(200).send({response: 'User deleted with success!'})
        }
        catch(e){
            return res.status(500).send({response: 'Server ERROR!'})
        }
    }
}
