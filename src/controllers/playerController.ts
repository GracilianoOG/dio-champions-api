import { Request, Response } from "express";
import { getAllPlayersService } from "../services/playersService";

export const getPlayer = async (req: Request, res: Response) => {
  const response = await getAllPlayersService();
  const { statusCode, body } = response;
  res.status(statusCode).json(body);
};
