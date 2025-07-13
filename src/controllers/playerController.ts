import { Request, Response } from "express";
import {
  getAllPlayersService,
  getPlayerByIdService,
} from "../services/playersService";

export const getAllPlayersController = async (req: Request, res: Response) => {
  const response = await getAllPlayersService();
  const { statusCode, body } = response;
  res.status(statusCode).json(body);
};

export const getPlayerByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await getPlayerByIdService(id);
  const { statusCode, body } = response;
  res.status(statusCode).json(body);
};
