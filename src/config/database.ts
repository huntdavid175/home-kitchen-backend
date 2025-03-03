import { Client } from "pg";

// Database connection configuration
const client = new Client({
  user: "fawaz", // replace with your database username
  host: "localhost",
  database: "meal_kit_db", // your database name
  password: "", // replace with your database password
  port: 5432,
});

export const createTables = async () => {
  try {
    await client.connect();

    const createCategoriesTable = `
      CREATE TABLE IF NOT EXISTS categories (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255),
        description TEXT
      );
    `;

    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password_hash TEXT,
        phone VARCHAR(20),
        address TEXT,
        role VARCHAR(50),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;

    const createRecipesTable = `
      CREATE TABLE IF NOT EXISTS recipes (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255),
        description TEXT,
        difficulty VARCHAR(50),
        cooking_time INT,
        servings INT,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        category_id UUID REFERENCES categories(id) ON DELETE SET NULL
      );
    `;

    const createCookingStepsTable = `
      CREATE TABLE IF NOT EXISTS cooking_steps (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
        step_number INT,
        description TEXT,
        image_url TEXT
      );
    `;

    const createIngredientsTable = `
      CREATE TABLE IF NOT EXISTS ingredients (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255),
        description TEXT,
        unit VARCHAR(50)
      );
    `;

    const createRecipeIngredientsTable = `
      CREATE TABLE IF NOT EXISTS recipe_ingredients (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
        ingredient_id UUID REFERENCES ingredients(id) ON DELETE CASCADE,
        quantity DECIMAL(10,2),
        unit VARCHAR(50)
      );
    `;

    const createCookingToolsTable = `
      CREATE TABLE IF NOT EXISTS cooking_tools (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255),
        description TEXT
      );
    `;

    const createRecipeToolsTable = `
      CREATE TABLE IF NOT EXISTS recipe_tools (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
        tool_id UUID REFERENCES cooking_tools(id) ON DELETE CASCADE
      );
    `;

    const createMealKitsTable = `
      CREATE TABLE IF NOT EXISTS meal_kits (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255),
        description TEXT,
        price DECIMAL(10,2),
        delivery_time VARCHAR(100),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;

    const createMealKitRecipesTable = `
      CREATE TABLE IF NOT EXISTS meal_kit_recipes (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        meal_kit_id UUID REFERENCES meal_kits(id) ON DELETE CASCADE,
        recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE
      );
    `;

    const createOrdersTable = `
      CREATE TABLE IF NOT EXISTS orders (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES users(id) ON DELETE CASCADE,
        total_price DECIMAL(10,2),
        status VARCHAR(50),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;

    const createOrderItemsTable = `
      CREATE TABLE IF NOT EXISTS order_items (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
        meal_kit_id UUID REFERENCES meal_kits(id) ON DELETE CASCADE,
        quantity INT,
        price DECIMAL(10,2)
      );
    `;

    // Execute all queries
    await client.query(createCategoriesTable);
    await client.query(createUsersTable);
    await client.query(createRecipesTable);
    await client.query(createCookingStepsTable);
    await client.query(createIngredientsTable);
    await client.query(createRecipeIngredientsTable);
    await client.query(createCookingToolsTable);
    await client.query(createRecipeToolsTable);
    await client.query(createMealKitsTable);
    await client.query(createMealKitRecipesTable);
    await client.query(createOrdersTable);
    await client.query(createOrderItemsTable);

    console.log("Tables created successfully!");
  } catch (error) {
    console.error("Error creating tables:", error);
  } finally {
    await client.end();
  }
};
