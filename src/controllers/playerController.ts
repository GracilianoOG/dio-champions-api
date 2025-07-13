import { Request, Response } from "express";
import { getAllPlayersService } from "../services/playersService";

export const getPlayer = async (req: Request, res: Response) => {
  const data = await getAllPlayersService();
  res.status(200).json(data);
};
