import express, { Router } from "express";
import {
  createIngredient,
  getIngredients,
  getIngredient,
  updateIngredient,
  deleteIngredient,
} from "../controllers/ingredients.controller";

const router: Router = express.Router();

router.post("/", createIngredient);
router.get("/", getIngredients);
router.get("/:id", getIngredient);
router.put("/:id", updateIngredient);
router.delete("/:id", deleteIngredient);

export default router;
