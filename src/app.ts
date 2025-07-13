import express, { json, Express, Request, Response } from "express";

const createApp = (): Express => {
  const app = express();

  app.use(json());

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      player: "Testing",
    });
  });

  return app;
};

export default createApp;
