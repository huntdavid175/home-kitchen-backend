import { Request, Response } from "express";

export const createRecipe = (req: Request, res: Response) => {
  res.json({ message: "Create a new recipe" });
};

export const getRecipes = (req: Request, res: Response) => {
  res.json({ message: "Get all recipes" });
};

export const getRecipe = (req: Request, res: Response) => {
  res.json({ message: "Get a new recipe" });
};

export const updateRecipe = (req: Request, res: Response) => {
  res.json({ message: "Update a recipe" });
};

export const deleteRecipe = (req: Request, res: Response) => {
  res.json({ message: "Delete a recipe" });
};
