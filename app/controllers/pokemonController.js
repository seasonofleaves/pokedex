import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class PokemonController {
  constructor() {
    // console.log('Pokemon Controller loaded');
    // this.drawPokemonList()
    this.getPokemon()
    AppState.on('pokemon', this.drawPokemonList)
    AppState.on('activePokemon', this.drawActivePokemon)
  }

  drawActivePokemon() {
    setHTML('pokemon-details', AppState.activePokemon.detailsHTMLTemplate)
  }

  drawPokemonList() {
    // console.log('is draw pokemon running'); yes
    const pokemon = AppState.pokemon
    let pokemonHTML = ''
    pokemon.forEach(pokemon => {
      pokemonHTML += `
      <div class="my-1">
            <button onclick="app.PokemonController.getPokemonByName('${pokemon.name}')" class="btn btn-info w-100 rounded-pill">
              ${pokemon.name}
            </button>
          </div>
      `
    })
    setHTML('pokemon-list', pokemonHTML)
  }

  async getPokemon() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async getPokemonByName(pokemonName) {
    try {
      await pokemonService.getPokemonByName(pokemonName)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

}