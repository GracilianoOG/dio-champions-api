import { Request, Response } from "express";
import {
  deletePlayerService,
  getAllPlayersService,
  getPlayerByIdService,
  postPlayerService,
  updatePlayerStatisticsService,
} from "../services/playerService";
import { PlayerStatisticsModel } from "../models/playerStatisticsModel";

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

export const postPlayerController = async (req: Request, res: Response) => {
  const response = await postPlayerService(req.body);
  const { statusCode, body } = response;
  res.status(statusCode).json(body);
};

export const deletePlayerController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await deletePlayerService(id);
  const { statusCode, body } = response;
  res.status(statusCode).json(body);
};

export const updatePlayerStatisticsController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const bodyValue: PlayerStatisticsModel = req.body;
  const response = await updatePlayerStatisticsService(id, bodyValue);
  const { statusCode, body } = response;
  res.status(statusCode).json(body);
};
