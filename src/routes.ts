import { Router } from "express";
import {
  deletePlayerController,
  getAllPlayersController,
  getPlayerByIdController,
  postPlayerController,
} from "./controllers/playerController";

const router = Router();

router.get("/players", getAllPlayersController);
router.get("/players/:id", getPlayerByIdController);

router.post("/players", postPlayerController);

router.delete("/players/:id", deletePlayerController);

export default router;
