import { Request, Response } from "express";

import { AddNewPetUseCase } from "../../application/usecases/add-new-pet-use-case";
export class AddNewPetUseController {
  constructor(private addNewPetUseCase: AddNewPetUseCase) {}

  async run(request: Request, response: Response): Promise<Response> {
    try {
      const {
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
      } = request.body;

      const newPet = await this.addNewPetUseCase.run({
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
      });

      return response.status(201).json(newPet);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
