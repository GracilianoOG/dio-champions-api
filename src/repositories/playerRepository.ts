import { PlayerModel } from "../models/playerModel";

const dataBase: PlayerModel[] = [
  { id: 1, name: "Messi" },
  { id: 2, name: "Ronaldo" },
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
  }
};
