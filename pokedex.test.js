const fetchPokemon = require('./api.js');
const Pokedex = require('./pokedex.js');

describe('fetchPokemon', () => {
    
    it('can fetch the data for charizard',(done) => {
        fetchPokemon('charizard').then((pokemon) =>{
            expect(pokemon.id).toEqual(6);
            done();
        })
    })


});

describe('all()', () => {
    describe('returns an empty list', () => {
        it('when call on an empty pokemon list',() => {
            pokedex = new Pokedex();
            expect(pokedex.all()).toEqual([]);
        })
    })

    describe('returns multiple pokemon', () => {
        it('when called on a pokemon list with two entries',() => {
            pokedex = new Pokedex();
            expect(pokedex.all()).toEqual([]);
        })
    })

});

describe('catch()', () => {
    describe('adds pokemon to pokemon array', () => {
        it('when called with a pokemon name',(done) => {
            pokedex = new Pokedex(done);
            pokedex.catch('charizard').then(() => {
                expect(pokedex.all()).toEqual([{ name: 'charizard', id: 6, height: 17, weight: 905 }]);
                done();
            });
        })
    })

    

});