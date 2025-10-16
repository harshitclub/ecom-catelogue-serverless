import { Request, Response } from "express";
import { products } from "../data/products";

export const sendProducts = (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({
      success: true,
      message: "Products are here.",
      count: products.length,
      data: products,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to send products",
      error: error.message || "Internal Server Error",
    });
  }
};

export const sendProduct = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = products.find((p) => p.id === id);
    if (product) {
      return res
        .status(200)
        .json({ success: true, message: "Product is here.", data: product });
    }
    return res
      .status(404)
      .json({ success: false, message: "Product not found." });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to send product",
      error: error.message || "Internal Server Error",
    });
  }
};
