import express from "express";
import routes from "./routes/routes.js";
import connectionDB from "./connectionDB/connectionDB.js";
import "dotenv/config.js";
import cors from "cors";
import roleSeed from "./seed/roleSeed.js";
const port = process.env.SERVER_PORT;
const app = express();

// Allow requests only from a specific frontend domain


// Apply CORS middleware with options
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares de rutas
app.use(routes);

await connectionDB
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log("server ok http://localhost:8080");
    });
  }).then(roleSeed);

