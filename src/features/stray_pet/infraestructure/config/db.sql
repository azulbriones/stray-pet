DROP TABLE IF EXISTS public.stray_pets;

CREATE TABLE public.stray_pets (
  id serial PRIMARY KEY,
  pet_name character varying(255) NOT NULL,
  pet_image character varying(255),
  age integer,
  pet_breed character varying(255),
  info text NOT NULL,
  address character varying(255) NOT NULL,
  status character varying(255) NOT NULL,
  reward integer,
  rescuer_id integer,
  owner_id integer,
  losted_date character varying(255) NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER SEQUENCE public.stray_pets_id_seq OWNED BY public.stray_pets.id;