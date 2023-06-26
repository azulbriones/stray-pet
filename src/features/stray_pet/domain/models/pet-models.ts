export interface PetModel {
  id?: number;
  pet_name: string;
  pet_image?: string;
  age?: number;
  pet_breed?: string;
  info: string;
  address: string;
  status: string;
  reward?: number;
  rescuer_id?: number;
  owner_id?: number;
  losted_date: string;
  created_at?: string | null;
}
