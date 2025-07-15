import { PlayerModel } from "../models/playerModel";
import { PlayerStatisticsModel } from "../models/playerStatisticsModel";

const dataBase: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    statistics: {
      strength: 65,
      speed: 90,
      technique: 95,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    statistics: {
      strength: 85,
      speed: 88,
      technique: 88,
    },
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    statistics: {
      strength: 70,
      speed: 95,
      technique: 80,
    },
  },
];

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
