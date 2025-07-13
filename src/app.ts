import express, { json, Express, Request, Response } from "express";
import { getPlayer } from "./controllers/playerController";
import router from "./routes";

const createApp = (): Express => {
  const app = express();

  app.use(json());
  app.use(router);

  return app;
};

export default createApp;
