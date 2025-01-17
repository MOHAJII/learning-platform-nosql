const express = require("express");
const config = require("./config/env");
const db = require("./config/db");
const cors = require('cors');

const courseRoutes = require("./routes/courseRoutes");
//const studentRoutes = require("./routes/studentRoutes");

const app = express();

async function startServer() {
  try {
    config.validateEnv();
    
    await db.connectMongo;
    await db.connectRedis;

    app.use(cors({
      origin: 'http://localhost:3001', // Replace with your frontend URL
      methods: 'GET,POST,PUT,DELETE', // Allowed methods
      credentials: true              // Include cookies if needed
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api/courses", courseRoutes);

    const server = app.listen(config.port, () => {
      console.log("Server start with port " + config.port);
    });

    process.on("SIGTERM", async () => {
      console.log("SIGTERM signal received. Closing server...");
      await new Promise((resolve) => server.close(resolve));
      await db.closeConnections();
      console.log("Server closed");
      process.exit(0);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
