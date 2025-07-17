import { players } from "../data/players";
import { PlayerModel } from "../models/playerModel";
import { PlayerStatisticsModel } from "../models/playerStatisticsModel";

const database: PlayerModel[] = players;

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deletePlayer = async (id: number) => {
  const index = database.findIndex(player => player.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const updatePlayerStatistics = async (
  id: number,
  statistics: PlayerStatisticsModel
) => {
  const playerIndex = database.findIndex(player => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
    return database[playerIndex];
  }
};

export const filterPlayersByClub = async (club: string) => {
  return database.filter(player => player.club === club);
};
