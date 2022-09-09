/**
 * Pokemon entities
 */
export interface IPokemon {
  id: number;
  name: string;
  types: IPokemonType[];
  sprites: Record<string, string>;
}

/**
 * The type of pokemon
 */
export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
