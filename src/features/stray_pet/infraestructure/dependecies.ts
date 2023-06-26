import { AddNewPetUseCase } from "../application/usecases/add-new-pet-use-case";
import { DeletePetUseCase } from "../application/usecases/delete-pet-use-case";
import { GetAllPetsUseCase } from "../application/usecases/get-all-pets-use-case";
import { GetPetByIdUseCase } from "../application/usecases/get-pet-by-id-use-case";
import { GetPetByOwnerIdUseCase } from "../application/usecases/get-pet-by-owner-id-use-case";
import { GetPetByRescuerIdUseCase } from "../application/usecases/get-pet-by-rescuer-id-use-case";
import { UpdatePetUseCase } from "../application/usecases/update-pet-use-case";
import { AddNewPetUseController } from "./controllers/add-new-pet-use-controller";
import { DeletePetUseController } from "./controllers/delete-pet-use-controller";
import { GetAllPetsUseController } from "./controllers/get-all-pets-use-controller";
import { GetPetByIdUseController } from "./controllers/get-pet-by-id-use-controller";
import { GetPetByOwnerIdUseController } from "./controllers/get-pet-by-owner-id-use-controller";
import { GetPetByRescuerIdUseController } from "./controllers/get-pet-by-rescuer-id-use-controller";
import { UpdatePetUseController } from "./controllers/update-pet-use-controller";
import { PostgreSqlPetRepository } from "./repository/postgre-sql-pet-repository";

export const postgresSqlPetRepository = new PostgreSqlPetRepository();

export const addNewPetUseCase = new AddNewPetUseCase(postgresSqlPetRepository);
export const addNewPetUseController = new AddNewPetUseController(
  addNewPetUseCase
);

export const deletePetUseCase = new DeletePetUseCase(postgresSqlPetRepository);
export const deletePetUseController = new DeletePetUseController(
  deletePetUseCase
);

export const getAllPetsUseCase = new GetAllPetsUseCase(
  postgresSqlPetRepository
);
export const getAllPetsUseController = new GetAllPetsUseController(
  getAllPetsUseCase
);

export const getPetByIdUseCase = new GetPetByIdUseCase(
  postgresSqlPetRepository
);
export const getPetByIdUseController = new GetPetByIdUseController(
  getPetByIdUseCase
);

export const getPetByOwnerIdUseCase = new GetPetByOwnerIdUseCase(
  postgresSqlPetRepository
);
export const getPetByOwnerIdUseController = new GetPetByOwnerIdUseController(
  getPetByOwnerIdUseCase
);

export const getPetByRescuerIdUseCase = new GetPetByRescuerIdUseCase(
  postgresSqlPetRepository
);
export const getPetByRescuerIdUseController =
  new GetPetByRescuerIdUseController(getPetByRescuerIdUseCase);

export const updatePetUseCase = new UpdatePetUseCase(postgresSqlPetRepository);
export const updatePetUseController = new UpdatePetUseController(
  updatePetUseCase
);
