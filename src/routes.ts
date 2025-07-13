import { Router } from "express";
import {
  getAllPlayersController,
  getPlayerByIdController,
} from "./controllers/playerController";

const router = Router();

router.get("/players", getAllPlayersController);
router.get("/players/:id", getPlayerByIdController);

export default router;
