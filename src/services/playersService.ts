import { NO_CONTENT, OK } from "../utils/httpHelper";

export const getAllPlayersService = async () => {
  const data = {
    player: "Testing",
  };

  if (!data) {
    return await NO_CONTENT();
  }

  return await OK(data);
};
