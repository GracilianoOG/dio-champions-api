import express, { json, Express } from "express";
import router from "./routes";

const createApp = (): Express => {
  const app = express();

  app.use(json());
  app.use(router);

  return app;
};

export default createApp;
