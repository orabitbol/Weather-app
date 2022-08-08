
import { configureStore } from '@reduxjs/toolkit';

import keyReducer from './keySlice';
import currentWeatherReducer from './currentWeatherSlice';
import fiveDaysReducer from './fiveDaysSlice';
import favoritesReducer from './favoritesSlice';
// import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


const store = configureStore({
    reducer: { keyCity: keyReducer, currentWeather: currentWeatherReducer, fiveDays: fiveDaysReducer, favorites: favoritesReducer },

});




export default store;