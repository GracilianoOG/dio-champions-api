import { PlayerModel } from "../models/playerModel";
import { PlayerStatisticsModel } from "../models/playerStatisticsModel";
import {
  deletePlayer,
  findAllPlayers,
  findPlayerById,
  insertPlayer,
  updatePlayerStatistics,
} from "../repositories/playerRepository";
import { BAD_REQUEST, CREATED, NO_CONTENT, OK } from "../utils/httpHelper";

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

export const postPlayerService = async (player: PlayerModel) => {
  if (!player) {
    return BAD_REQUEST();
  }

  await insertPlayer(player);
  return await CREATED();
};

export const deletePlayerService = async (id: number) => {
  await deletePlayer(id);
  return await OK({ message: "Deleted" });
};

export const updatePlayerStatisticsService = async (
  id: number,
  statistics: PlayerStatisticsModel
) => {
  const data = await updatePlayerStatistics(id, statistics);
  const response = await OK(data);
  return response;
};
