import { Request, Response } from "express";

export async function Example(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: "API is running!" });
}
