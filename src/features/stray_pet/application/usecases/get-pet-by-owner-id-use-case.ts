import { PetEntity } from "../../domain/entities/pet-entity";
import { PetRepository } from "../../domain/repositories/pet-repository";

export class GetPetByOwnerIdUseCase {
  constructor(private petRepository: PetRepository) {}

  async run(ownerId: number): Promise<PetEntity[] | null> {
    const pets = await this.petRepository.getPetsByOwnerId(ownerId);
    return pets;
  }
}
