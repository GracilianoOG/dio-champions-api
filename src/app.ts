import express, { json, Express } from "express";
import router from "./routes";
import cors from "cors";

const createApp = (): Express => {
  const app = express();

  app.use(cors());
  app.use(json());
  app.use("/api", router);

  return app;
};

export default createApp;
