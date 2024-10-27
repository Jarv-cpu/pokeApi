export function Pokemon({ pokemon }) {
    return (
        <main>
            <h2 className='name'>{pokemon ?
                `${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} #${pokemon.id}`
                : "Pokemon"}</h2>
            <div className='stats'>
                <h3>Estadisticas</h3>
                <p>Altura: {pokemon?.height}</p>
                <p>Peso: {pokemon?.weight}</p>
                <img src={pokemon?.sprites.other["official-artwork"].front_default} />
            </div>
        </main>
    )
}