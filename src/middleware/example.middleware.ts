import { Request, Response, NextFunction } from "express";

export function ExampleMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    next();
}
