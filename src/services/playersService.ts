import {
  findAllPlayers,
  findPlayerById,
} from "../repositories/playerRepository";
import { NO_CONTENT, OK } from "../utils/httpHelper";

export const getAllPlayersService = async () => {
  const data = await findAllPlayers();

  if (!data) {
    return await NO_CONTENT();
  }

  return await OK(data);
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);

  if (!data) {
    return await NO_CONTENT();
  }

  return await OK(data);
};
