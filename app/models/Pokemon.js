export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.sprites.front_default
    this.backImg = data.sprites.back_default
    this.weight = data.weight
    this.health = data.stats[0].base_stat
    this.attack = data.stats[1].base_stat
    this.defense = data.stats[2].base_stat
    this.speed = data.stats[5].base_stat
  }

  get detailsHTMLTemplate() {
    return /*html*/`
    <div class="p-3">
            <h1>${this.name}</h1>
            <img src="${this.img}" alt="Pokemon">
            <img src="${this.backImg}" alt="Pokemon">
            <p>Weight: ${this.weight}</p>
            <p>Health: ${this.health}</p>
            <p>Attack: ${this.attack}</p>
            <p>Defense: ${this.defense}</p>
            <p>Speed: ${this.speed}</p>
          </div>
    `
  }
}