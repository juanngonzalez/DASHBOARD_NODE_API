// import { Sequelize } from "sequelize";
// import "dotenv/config.js"

// const database=process.env.DATABASE
// const username=process.env.DB_USERNAME
// const password=process.env.DB_PASSWORD
// const host=process.env.DB_HOST
// const port=process.env.DB_PORT
// const dialect=process.env.DB_DIALECT

// const connectionDB = new Sequelize(database, username, password, {
//   host,
//   port,
//   dialect,
// });

// try {
//   await connectionDB.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

// export default connectionDB

import { Sequelize } from "sequelize";
import "dotenv/config.js";

const databaseUrl = process.env.DATABASE_URL;

const connectionDB = new Sequelize(databaseUrl, {
  // Otras opciones de configuración de Sequelize
});

// Puedes envolver el código en una función async para usar await.
async function connectToDatabase() {
  try {
    await connectionDB.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default connectionDB;
