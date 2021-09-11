import state from "./state";

export default {
	// Updates pokedex loading offset
	updateOffset() {
		state.offset += state.limit;
	},
	// Adds pokemons to the pokedex for infinite loading
	setList(list) {
		state.list.push(...list);
		state.tmpList.push(...list);
	},
	// Informs if the pokedex need more data
	setListHasNext(flag) {
		state.listHasNext = flag;
	},
	// Informs if the pokedex has finished fetching data
	setListHasCompleted(flag) {
		state.listHasCompleted = flag;
	},
	// Resets the pokedex to the last cache and removes search information
	resetList() {
		state.list = [...state.tmpList];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
		state.pokemonId = null;
	},
	// Informs if the pokedex got an error
	setListHasError(flag) {
		state.listHasError = flag;
	},
	// Resets the pokedex to the last cache and removes search information
	restList() {
		state.list = [...state.tmpList];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
	},

	// Adds to the pokedex only the searched pokemon
	setPokemonSearched(pokemon) {
		state.list = [pokemon];
	},
	// Informs that the search is happening
	setIsSearching(flag) {
		state.isSearching = flag;
	},
	setIsPokemonSearch(flag) {
		state.isPokemonSearch = flag;
	},
	// Informs that search got an error
	setSearchHasError(flag) {
		state.searchHasError = flag;
	},

	// Select Pokemon
	setPokemonId(id = null) {
		state.isPokemonSearch = false;
		state.pokemonId = id;
	},
};
