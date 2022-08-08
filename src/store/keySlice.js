
import { createSlice } from '@reduxjs/toolkit';
const initialKeyCityState = { key: 0, nameCity: '' }

const keySlice = createSlice({
    name: 'key',
    initialState: initialKeyCityState,
    reducers: {
        getKeyValue(state, action) {
            state.key = state.key = action.payload;
        },
        getNameCity(state, action) {
            state.nameCity = action.payload;
        },
    }
});

export const keyActions = keySlice.actions;
export default keySlice.reducer;