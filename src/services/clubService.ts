import { findAllClubs } from "../repositories/clubRepository";
import { OK } from "../utils/httpHelper";

export const getAllClubsService = async () => {
  const data = await findAllClubs();

  const response = OK(data);
  return response;
};
