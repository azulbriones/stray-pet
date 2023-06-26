import { Request, Response } from "express";
import { GetPetByRescuerIdUseCase } from '../../application/usecases/get-pet-by-rescuer-id-use-case';

export class GetPetByRescuerIdUseController {
  constructor(
    private getPetByRescuerIdUseCase: GetPetByRescuerIdUseCase
  ) {}

  async run(request: Request, response: Response): Promise<Response> {
    try {
      const { rescuerId } = request.params;

      const pets = await this.getPetByRescuerIdUseCase.run(
        Number(rescuerId)
      );

      return response.status(200).json(pets);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
