import { Request, Response } from "express";

export const createCategory = (req: Request, res: Response) => {
  res.json({ message: "Create a new category" });
};

export const getCategory = (req: Request, res: Response) => {
  res.json({ message: "Get a new category" });
};

export const getCategories = (req: Request, res: Response) => {
  res.json({ message: "Get all categories" });
};

export const updateCategory = (req: Request, res: Response) => {
  res.json({ message: "Update a category" });
};

export const deleteCategory = (req: Request, res: Response) => {
  res.json({ message: "Delete a category" });
};
