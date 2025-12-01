import express from "express";
import dotenv from "dotenv";
import { syncDB } from "./models/index.js";

import dataRoutes from "./routes/dataRoutes.js";
import tableRoutes from "./routes/tableRoutes.js";
import fieldRoutes from "./routes/fieldRoutes.js";
import backupRoutes from "./routes/backupRoutes.js";
import exportRoutes from "./routes/exportRoutes.js";
import queryRoutes from "./routes/queryRoutes.js";
import countryRoutes from "./routes/countryRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

syncDB();

app.use("/api/data", dataRoutes);
app.use("/api/table", tableRoutes);
app.use("/api/field", fieldRoutes);
app.use("/api/backup", backupRoutes);
app.use("/api/export", exportRoutes);
app.use("/api/query", queryRoutes);
app.use("/api/country", countryRoutes);
app.use("/api/address", addressRoutes);

app.get("/", (req, res) => res.send("BankDB API running!"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
