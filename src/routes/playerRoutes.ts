import { Router } from "express";
import {
  deletePlayerController,
  getAllPlayersController,
  getPlayerByIdController,
  getPlayersByClubController,
  postPlayerController,
  updatePlayerStatisticsController,
} from "../controllers/playerController";

const router = Router();

router.get("/players", getAllPlayersController);
router.post("/players", postPlayerController);
router.get("/players/:id", getPlayerByIdController);
router.get("/players/clubs/:club", getPlayersByClubController);
router.patch("/players/:id", updatePlayerStatisticsController);
router.delete("/players/:id", deletePlayerController);

export default router;
