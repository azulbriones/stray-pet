import { PetEntity } from "../../domain/entities/pet-entity";
import { PetRepository } from "../../domain/repositories/pet-repository";

export class GetPetByRescuerIdUseCase {
  constructor(private petRepository: PetRepository) {}

  async run(rescuerId: number): Promise<PetEntity[] | null> {
    const pets = await this.petRepository.getPetsByRescuerId(rescuerId);
    return pets;
  }
}
