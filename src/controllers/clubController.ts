import { Request, Response } from "express";
import {
  getAllClubsService,
  getClubByIdService,
} from "../services/clubService";

export const getAllClubsController = async (req: Request, res: Response) => {
  const response = await getAllClubsService();
  const { statusCode, body } = response;
  res.status(statusCode).json(body);
};

export const getClubByIdController = async (req: Request, res: Response) => {
  const clubId = parseInt(req.params.id);
  const response = await getClubByIdService(clubId);
  const { statusCode, body } = response;
  res.status(statusCode).json(body);
};
