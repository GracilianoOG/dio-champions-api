import { PlayerStatisticsModel } from "./playerStatisticsModel";

export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  statistics: PlayerStatisticsModel;
}
