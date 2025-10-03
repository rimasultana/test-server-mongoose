/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { UserService } from "./user.service";

const createIntoDB = async (req: Request, res: Response) => {
    try {
        const data = req.body
        console.log(data);
        const result = await UserService.createIntoDB(data)
        res.status(500).json({
            success: true,
            message: "User Created Successfully!",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something With Wrong",
            error: error
        })

    }
}

const getAllDB = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getAllDB()
        res.status(500).json({
            success: true,
            message: "User get Successfully!",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something With Wrong",
            error: error
        })

    }
}

const getSingleDB = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await UserService.getSingleDB(id)
        res.status(500).json({
            success: false,
            message: "User Created Successfully!",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something With Wrong",
            error: error
        })

    }
}

export const UserController ={
    createIntoDB,
    getAllDB,
    getSingleDB
}