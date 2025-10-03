import { IUser } from "./user.interface"
import User from "./user.model"

const createIntoDB = async (data: IUser) => {
    const result = await User.create(data)
    return result
}

const getAllDB = async () => {
    const result = await User.find()
    return result
}

const getSingleDB = async (id: string) => {
    const result = await User.findOne({ id })
    return result
}

export const UserService = {
    createIntoDB,
    getAllDB,
    getSingleDB
}

