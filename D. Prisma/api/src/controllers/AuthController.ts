import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import CryptoJS from 'crypto-js'

dotenv.config();

class AuthController {
    static async register(req: Request, res: Response): Promise<any> {
        const { name, email, password } = req.body;
        // console.log("SECRET:", process.env.SECRET);
        const passwordCrypt = CryptoJS.AES.encrypt(password, process.env.SECRET as string).toString();
        
        const user = new User({
            name,
            email,
            password: passwordCrypt,
        });

        try {
            await user.save();
            return res.status(201).send({ message: "User registered!" });
        } catch (error) {
            return res.status(500).send({ message: "Something failed" });
        }
    }

    static async login(req: Request, res: Response): Promise<any> {
        const {email, password} = req.body
        const userExits = await User.findOne({email: email})
        
        if (userExits){
            const decryptedPassword = CryptoJS.AES.decrypt(userExits.password, process.env.SECRET as string)
            const passwordDecrypted = decryptedPassword.toString(CryptoJS.enc.Utf8)
    
            if (password !== passwordDecrypted) {
                return res.status(400).send({response: "Email and/or password invalid!"})
            }

            const secret = process.env.SECRET

            const token = jwt.sign ({
                id: userExits.id
            }, secret as string, {
                expiresIn: "2 days"
            })

            return res.status(200).send({ token : token })
        } else {
            return res.status(400).send({response: "User not found!"})
        }
    }
}

export default AuthController;
