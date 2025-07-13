import { Router } from "express";
import { getPlayer } from "./controllers/playerController";

const router = Router();

router.get("/api", getPlayer);

export default router;
