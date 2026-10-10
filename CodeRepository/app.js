

const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Parse incoming JSON request bodies.
app.use(express.json());

app.use("/api/v1", taskRoutes);

// Centralized error handling
app.use(errorHandler);

module.exports = app;