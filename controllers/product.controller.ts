import { Request, Response } from "express";
import { products } from "../data/products";

export const sendProducts = (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({
      success: true,
      message: "Products sent successfully",
      count: products.length,
      data: products,
    });
  } catch (error: any) {
    console.error("Error sending products:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send products",
      error: error.message || "Internal Server Error",
    });
  }
};
