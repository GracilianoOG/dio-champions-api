import express, { json, Express } from "express";
import cors from "cors";
import playerRouter from "./routes/playerRoutes";
import clubRouter from "./routes/clubRoutes";

const createApp = (): Express => {
  const app = express();

  app.use(cors());
  app.use(json());
  app.use("/api", playerRouter);
  app.use("/api", clubRouter);

  return app;
};

export default createApp;
