import express, { Request, Response, NextFunction } from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { sendProduct, sendProducts } from "../controllers/product.controller";

const app = express();

// ---------------------------
// Middleware
// ---------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression()); // compress responses
app.use(cors()); // enable CORS for frontend calls
app.use(helmet()); // security headers

// ---------------------------
// Serve static files
// ---------------------------
app.use("/public", express.static(path.join(__dirname, "../public")));

// ---------------------------
// Routes
// ---------------------------
app.get("/api/v1/products", sendProducts);
app.get("/api/v1/products/:id", sendProduct);

// Health check / default route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Serverless Express API is Active",
    uptime: process.uptime(),
  });
});

// ---------------------------
// Global Error Handler
// ---------------------------
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Global Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
