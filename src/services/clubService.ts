import { findAllClubs, findClubById } from "../repositories/clubRepository";
import { NO_CONTENT, OK } from "../utils/httpHelper";

export const getAllClubsService = async () => {
  const data = await findAllClubs();

  const response = OK(data);
  return response;
};

export const getClubByIdService = async (id: number) => {
  const data = await findClubById(id);

  if (!data) {
    return await NO_CONTENT();
  }

  return await OK(data);
};
