import { registerUserDto, updateUserDto } from "../dtos/userDTO"
import { prisma }  from '../lib/prisma'

export const registerUser = async (data: registerUserDto) => {
   const {name, email, password} = data
   await prisma.user.create({
    data: { name, email, password}
   })
}

export const showUsers = async () => {
    return await prisma.user.findMany()
}

export const updateUser = async (data: updateUserDto) => {
   const {name, email, password} = data
   await prisma.user.update({
    where: { email: email },
    data: {
        name,
        email,
        password,
    }
   })
}

export const deleteUser = async (email: string) => {
   await prisma.user.delete({
    where: { email: email}
   })
}