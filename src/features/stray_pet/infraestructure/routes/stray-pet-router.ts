import express from "express";

import {
  addNewPetUseController,
  deletePetUseController,
  getAllPetsUseController,
  getPetByIdUseController,
  getPetByOwnerIdUseController,
  getPetByRescuerIdUseController,
  updatePetUseController,
} from "../dependecies";

const strayPetRouter = express.Router();

strayPetRouter.get(
  "/",
  getAllPetsUseController.run.bind(getAllPetsUseController)
);
strayPetRouter.get(
  "/:id",
  getPetByIdUseController.run.bind(getPetByIdUseController)
);
strayPetRouter.post(
  "/",
  addNewPetUseController.run.bind(addNewPetUseController)
);
strayPetRouter.delete(
  "/:id",
  deletePetUseController.run.bind(deletePetUseController)
);
strayPetRouter.get(
  "/owner/:ownerId",
  getPetByOwnerIdUseController.run.bind(getPetByOwnerIdUseController)
);
strayPetRouter.get(
  "/rescuer/:rescuerId",
  getPetByRescuerIdUseController.run.bind(getPetByRescuerIdUseController)
);
strayPetRouter.put(
  "/:id",
  updatePetUseController.run.bind(updatePetUseController)
);

export { strayPetRouter };
