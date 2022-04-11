import PokemonList from "./PokemonList"
export default function Main() {
    return (
        <>
            <section id="pokemon-list">
                <PokemonList />
            </section>
            <section id="pokemon-focused">
                {/* focused details on single pokemon here */}
            </section>
        </>
    )
}
