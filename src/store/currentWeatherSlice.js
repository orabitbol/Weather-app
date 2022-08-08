import { createSlice } from '@reduxjs/toolkit';


const initialCurrentWeather = { currentWeather: [] }

const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState: initialCurrentWeather,
    reducers: {
        getCurrentWeather(state, action) {
            state.currentWeather = action.payload;
        },
    }
});


export const currentWeatherActions = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
