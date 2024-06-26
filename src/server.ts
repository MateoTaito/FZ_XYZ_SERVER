import express from "express";
import db from "./config/db";
import routerAuth from "./routes/router.auth";
import routerAsist from "./routes/router.asist";

// Conectamos Base de Datos
async function connectDB() {
	try {
		await db.authenticate();
		db.sync();
	} catch (error) {
		console.log("Error al conectar DB");
		console.log(process.env.DATABASE_URL);
	}
}

connectDB();

const server = express();
const cors = require("cors");
server.use(cors());

server.use(express.json());

server.use("/api/auth", routerAuth);
server.use("/api/asist", routerAsist);

export default server;
