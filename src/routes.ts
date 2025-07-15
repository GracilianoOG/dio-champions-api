import { Router } from "express";
import {
  deletePlayerController,
  getAllPlayersController,
  getPlayerByIdController,
  postPlayerController,
  updatePlayerStatisticsController,
} from "./controllers/playerController";
import { getAllClubsController } from "./controllers/clubController";

const router = Router();

router.get("/players", getAllPlayersController);
router.get("/players/:id", getPlayerByIdController);

router.patch("/players/:id", updatePlayerStatisticsController);

router.post("/players", postPlayerController);

router.delete("/players/:id", deletePlayerController);

router.get("/clubs", getAllClubsController);

export default router;
