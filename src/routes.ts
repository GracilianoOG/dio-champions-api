import { Router } from "express";
import { getAllPlayersController } from "./controllers/playerController";

const router = Router();

router.get("/players", getAllPlayersController);

export default router;
