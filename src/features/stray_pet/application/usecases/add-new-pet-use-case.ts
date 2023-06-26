import { PetRepository } from '../../domain/repositories/pet-repository';

export class AddNewPetUseCase {
  constructor(private petRepository: PetRepository) {}

  async run({
    pet_name,
    pet_image,
    age,
    pet_breed,
    info,
    address,
    status,
    reward,
    rescuer_id,
    owner_id,
    losted_date,
  }: {
    pet_name: string;
    pet_image: string | null;
    age: number | null;
    pet_breed: string | null;
    info: string;
    address: string;
    status: string;
    reward:number | null;
    rescuer_id: number | null;
    owner_id: number;
    losted_date: string;
  }) {
    return await this.petRepository.createPet(
      pet_name,
      pet_image,
      age,
      pet_breed,
      info,
      address,
      status,
      reward,
      rescuer_id,
      owner_id,
      losted_date,
    );
  }
}
