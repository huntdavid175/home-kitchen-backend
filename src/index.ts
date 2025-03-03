import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { createTables } from "./config/database";
import recipeRoutes from "./routes/recipes.routes";
import categoryRoutes from "./routes/categories.routes";
import ingredientRoutes from "./routes/ingredients.routes";
require("dotenv").config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message:
      "Too many requests from this IP, please try again after 15 minutes",
  })
);

app.use("/api/recipes", recipeRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/ingredients", ingredientRoutes);

createTables();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server is running on port 3001");
});
