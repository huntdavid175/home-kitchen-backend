import express, { Router } from "express";
import {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipes.controller";

import {
  createCookingStep,
  getCookingSteps,
  updateCookingStep,
  deleteCookingStep,
} from "../controllers/cookingSteps.controller";

const router: Router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);
router.post("/", createRecipe);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

// getting cooking steps of recipes

router.post("/:id/steps", createCookingStep);
router.get("/:id/steps", getCookingSteps);
router.put("/:id/steps/:stepId", updateCookingStep);
router.delete("/:id/steps/:stepId", deleteCookingStep);

export default router;
