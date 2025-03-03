import { Request, Response } from "express";

export const createCookingStep = (req: Request, res: Response) => {
  res.json({ message: "Create a new cooking step" });
};

export const getCookingSteps = (req: Request, res: Response) => {
  res.json({ message: "Get all cooking steps" });
};

export const updateCookingStep = (req: Request, res: Response) => {
  res.json({ message: "Update a cooking step" });
};

export const deleteCookingStep = (req: Request, res: Response) => {
  res.json({ message: "Delete a cooking step" });
};
