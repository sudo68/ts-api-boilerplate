import { Example } from "@/controllers/example.controller";
import { Router } from "express";

const router: Router = Router();

router.get("/welcome", Example);

export default router;
