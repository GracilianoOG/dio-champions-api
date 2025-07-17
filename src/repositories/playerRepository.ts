import { players } from "../data/players";
import { PlayerModel } from "../models/playerModel";
import { PlayerStatisticsModel } from "../models/playerStatisticsModel";

const dataBase: PlayerModel[] = players;

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return dataBase;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return dataBase.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  dataBase.push(player);
};

export const deletePlayer = async (id: number) => {
  const index = dataBase.findIndex(player => player.id === id);

  if (index !== -1) {
    dataBase.splice(index, 1);
    return true;
  }

  return false;
};

export const updatePlayerStatistics = async (
  id: number,
  statistics: PlayerStatisticsModel
) => {
  const playerIndex = dataBase.findIndex(player => player.id === id);

  if (playerIndex !== -1) {
    dataBase[playerIndex].statistics = statistics;
    return dataBase[playerIndex];
  }
};

export const filterPlayersByClub = async (club: string) => {
  return dataBase.filter(player => player.club === club);
};
