import express from "express";
import routes from "./src/routes/routes.js";
import connectionDB from "./src/connectionDB/connectionDB.js";
import "dotenv/config.js";
import cors from "cors";
import roleSeed from "./src/seed/roleSeed.js";
import serverless from "serverless-http";
const port = process.env.SERVER_PORT;
const app = express();

// Allow requests only from a specific frontend domain


// Apply CORS middleware with options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares de rutas
app.use(`/.netlify/functions/api`,routes);
app.get('/', (req,res) => {
  res.send('Welcome')
})

await connectionDB
  .sync({ force: false })
  .then(() => {
    serverless(app.listen(port, () => {
      console.log("server ok http://localhost:8080");
    }))
  }).then(roleSeed);
