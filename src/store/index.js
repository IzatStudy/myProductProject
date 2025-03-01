import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
    },
});

export const selectPokemons = (state) => state.pokemon;