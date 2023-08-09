import express from "express";
import routes from "./src/routes/routes.js";
import connectionDB from "./src/connectionDB/connectionDB.js";
import "dotenv/config.js";
import cors from "cors";
import roleSeed from "./src/seed/roleSeed.js";
import serverless from "serverless-http";
const port = process.env.PORT || 8080;
const app = express();

// Allow requests only from a specific frontend domain


// Apply CORS middleware with options
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares de rutas
app.use(routes);
app.get('/', (req,res) => {
  res.send('Welcome')
})

await connectionDB
  .sync({ force: false })
  .then(() => {
    serverless(app.listen(port, "0.0.0.0", () => {
      console.log("server ok", port);
    }))
  }).then(roleSeed);
