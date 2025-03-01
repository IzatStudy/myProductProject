import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    caughtPokemons: [],
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            state.caughtPokemons.push(action.payload);
        },
    },
});

export const { addPokemon } = pokemonSlice.actions;

export const selectCaughtPokemons = (state) => state.pokemon.caughtPokemons;

export default pokemonSlice.reducer;
