import express, { json, Express } from "express";
import cors from "cors";
import playerRouter from "./routes/playerRoutes";
import clubRouter from "./routes/clubRoutes";

const createApp = (): Express => {
  const app = express();
  const DEFAULT_PREFIX = "3333";
  const API_PREFIX = process.env.API_PREFIX ?? DEFAULT_PREFIX;

  app.use(cors());
  app.use(json());
  app.use(API_PREFIX, playerRouter);
  app.use(API_PREFIX, clubRouter);

  return app;
};

export default createApp;
