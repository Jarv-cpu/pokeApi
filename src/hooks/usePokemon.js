import { useEffect, useState } from "react"

export function usePokemon(){
    const [search, setSeatch] = useState()

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
      if (search) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
          .then(res => res.json())
          .then(json => setPokemon(json))
      }
    }, [search])
  
    useEffect(() => {
      if(pokemon){
        console.log(pokemon)
      }
    }, [pokemon])

    function searchPokemon(e) {
      e.preventDefault()
      const { name } = e.target.elements
      if (name) setSeatch(name.value.toLowerCase())
    }

    return [pokemon, searchPokemon]

  }