const fetchPokemon = require('./api.js');

class Pokedex{
    constructor(){
        this.pokemon = [];
    }

    all() {
        return this.pokemon;
    }

    catch(name) {
        return fetchPokemon(name).then((pokemon) =>{
            this.pokemon.push(pokemon);
        })
    }
}


module.exports = Pokedex;