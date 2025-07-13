import { Request, Response } from "express";
import { getAllPlayersService } from "../services/playersService";
import { OK } from "../utils/httpHelper";

export const getPlayer = async (req: Request, res: Response) => {
  const data = await getAllPlayersService();
  const { statusCode, body } = await OK(data);
  res.status(statusCode).json(body);
};
