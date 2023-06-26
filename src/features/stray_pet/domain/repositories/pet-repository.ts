import { PetEntity } from "../entities/pet-entity";

export interface PetRepository {
  createPet(
    pet_name: string,
    pet_image: string | null,
    age: number | null,
    pet_breed: string | null,
    info: string,
    address: string,
    status: string,
    reward: number | null,
    rescuer_id: number | null,
    owner_id: number | null,
    losted_date: string
  ): Promise<PetEntity | null>;

  getAllPets(): Promise<PetEntity[]>;
  getPetById(id: number): Promise<PetEntity | null>;
  getPetsByOwnerId(ownerId: number): Promise<PetEntity[]>;
  getPetsByRescuerId(rescuerId: number): Promise<PetEntity[]>;

  updatePet(id: number, petData: Partial<PetEntity>): Promise<PetEntity | null>;

  deletePet(id: number): Promise<boolean>;
}
