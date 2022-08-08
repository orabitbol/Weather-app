import { createSlice } from '@reduxjs/toolkit';
const initialFavorites = { favorites: [{}] }

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialFavorites,
    reducers: {
        getFavorites(state, action) {
            let len = state.favorites.length;
            if (len != 0)
                state.favorites = [...state.favorites, ...action.payload];
            else
                state.favorites = action.payload;
        }
    }
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice.reducer;
