import bodyParser from "body-parser";
import express from "express";

import { strayPetRouter } from "./features/stray_pet/infraestructure/routes/stray-pet-router";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use("/strays-pets/", strayPetRouter);

app.listen(PORT, () => {
  console.log(`[APP] - Starting application on port ${PORT}`);
});
