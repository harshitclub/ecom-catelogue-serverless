import express, { Request, Response } from "express";
import compression from "compression";
import { sendProducts } from "../controllers/product.controller";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get("/api/products", sendProducts);
app.get("/", (req: Request, res: Response) => {
  res.send("Serverless Express is Active.");
});

export default app;
