export class PetEntity {
  constructor(
    readonly id: number | null,
    readonly pet_name: string,
    readonly pet_image: string | null,
    readonly age: number | null,
    readonly pet_breed: string | null,
    readonly info: string,
    readonly address: string,
    readonly status: string,
    readonly reward: number | null,
    readonly rescuer_id: number | null,
    readonly owner_id: number,
    readonly losted_date: string,
    readonly created_at: string | null
  ) {}
}
