import { ClubModel } from "../models/clubModel";

const dataBase: ClubModel[] = [
  {
    id: 1,
    name: "Inter Miami",
  },
  {
    id: 2,
    name: "Al Nassr",
  },
  {
    id: 3,
    name: "Paris Saint-Germain",
  },
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return dataBase;
};
