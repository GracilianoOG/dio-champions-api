import { ClubModel } from "../models/clubModel";
import fs from "fs/promises";

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};

export const findClubById = async (
  id: number
): Promise<ClubModel | undefined> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs.find(club => club.id === id);
};
