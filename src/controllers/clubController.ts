import { Request, Response } from "express";
import { getAllClubsService } from "../services/clubService";

export const getAllClubsController = async (req: Request, res: Response) => {
  const response = await getAllClubsService();
  const { statusCode, body } = response;
  res.status(statusCode).json(body);
};
