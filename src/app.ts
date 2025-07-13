import express, { json, Express, Request, Response } from "express";
import { getPlayer } from "./controllers/playerController";

const createApp = (): Express => {
  const app = express();

  app.use(json());

  app.get("/", getPlayer);

  return app;
};

export default createApp;
