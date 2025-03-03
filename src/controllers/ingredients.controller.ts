import { Request, Response } from "express";

export const createIngredient = (req: Request, res: Response) => {
  res.json({ message: "Create a new ingredient" });
};

export const getIngredient = (req: Request, res: Response) => {
  res.json({ message: "Get a new ingredient" });
};

export const getIngredients = (req: Request, res: Response) => {
  res.json({ message: "Get all categories" });
};

export const updateIngredient = (req: Request, res: Response) => {
  res.json({ message: "Update a ingredient" });
};

export const deleteIngredient = (req: Request, res: Response) => {
  res.json({ message: "Delete a ingredient" });
};
