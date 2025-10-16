import express, { Request, Response } from "express";
import compression from "compression";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get("/", (req: Request, res: Response) => {
  res.send("Serverless Express is Active.");
});

export default app;
