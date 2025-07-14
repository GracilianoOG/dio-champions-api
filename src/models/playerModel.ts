import { PlayerStatisticsModel } from "./playerStatisticsModel";

export interface PlayerModel {
  id: number;
  name: string;
  statistics: PlayerStatisticsModel;
}
