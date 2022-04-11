import { useFetch } from "usehooks-ts";

interface ApiRes {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

interface Pokemon {
  name: string,
  url: string,
}

const url = `https://pokeapi.co/api/v2/pokemon?limit=151`

export default function PokemonList() {
  const { data } = useFetch<ApiRes>(url)
  const pokeArray: Pokemon[] = data?.results ?? [];
  
  return (
    <div>
      {pokeArray.map((pokemon: Pokemon, index: number) => {
        const pokeNumber = index + 1;
        return (
          <div>
            <p>{pokemon.name}</p>
            <p>#{pokeNumber}</p>
          </div>
        );
      })}
    </div>
  );
}
