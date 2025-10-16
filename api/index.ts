import express, { Request, Response } from "express";

const app = express();

app.get("/api/status", (req: Request, res: Response) => {
  res.status(200).json({
    status: "Operational",
    timestamp: new Date().toISOString(),
    message: "Serverless Express API is running smoothly.",
  });
});

app.post("/api/echo", (req: Request, res: Response) => {
  const data = req.body;
  res.status(201).json({
    received: data,
    processed: true,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Serverless Express is active. Try hitting /api/status or /api/echo."
  );
});

export default app;
