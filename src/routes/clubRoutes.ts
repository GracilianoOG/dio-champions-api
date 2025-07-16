import { Router } from "express";

import {
  getAllClubsController,
  getClubByIdController,
} from "../controllers/clubController";

const clubRouter = Router();

clubRouter.get("/clubs", getAllClubsController);
clubRouter.get("/clubs/:id", getClubByIdController);

export default clubRouter;
