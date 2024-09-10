import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeAPI } from "./AxiosService.js";

class PokemonService {
  async getPokemonByName(pokemonName) {
    // console.log('pokemon index firing', pokemonName)
    const response = await pokeAPI.get(`api/v2/pokemon/${pokemonName}`)
    console.log('Getting pokemon details?', response.data)
    const newPokemon = new Pokemon(response.data)
    AppState.activePokemon = newPokemon
  }

  async getPokemon() {
    const response = await pokeAPI.get('api/v2/pokemon')
    // console.log('Got monsters', response.data)
    AppState.pokemon = response.data.results
    // console.log('pokemon in the appstate', AppState.pokemon)
  }
}

export const pokemonService = new PokemonService()