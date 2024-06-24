/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");
const baseController = require("./controllers/baseController");

// Import the inventoryRoute
const inventoryRoute = require("./routes/inventoryRoute");

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); //not at views root

/* ***********************
 * Routes
 *************************/
// Index Route
app.get(static);
// Index route
app.get("/", baseController.buildHome);

// Inventory routes
app.use("/inv", inventoryRoute);

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 5500; // Default to 3000 if not set
const host = process.env.HOST || '0.0.0.0'; // Default to 0.0.0.0 if not set

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, host, () => {
  console.log(`App listening on ${host}:${port}`);
});




