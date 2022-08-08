import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { keyActions } from '../store/keySlice'
import { currentWeatherActions} from '../store/currentWeatherSlice'
import {fiveDaysActions } from '../store/fiveDaysSlice'


import SearchField from 'react-search-field';
import './search.css'

const Search = () => {

    const apiKey = 'KA8scwNGDc7dalq9UlDSZajAoWNKTGTM';

    const dispatch = useDispatch();

    const [nameCity, setNameCity] = useState('');

    const geyKeyCity = async () => {
            const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${nameCity}`);
            const result = await response.json();
            console.log(result[0]);
            dispatch(keyActions.getKeyValue(result[0].Key)); // in redux number of city - tel aviv
            dispatch(keyActions.getNameCity(nameCity));
            setNameCity('');

            const response1 = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${result[0].Key}?apikey=${apiKey}`)
            const result1 = await response1.json();
            dispatch(currentWeatherActions.getCurrentWeather(result1[0]));

            const response2 = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${result[0].Key}?apikey=${apiKey}`)
            const result2 = await response2.json();
            dispatch(fiveDaysActions.getDetail(result2.DailyForecasts));
    }

    return (
        <div>
            <SearchField
                placeholder='City Name'
                onEnter={() => { geyKeyCity() }}
                onSearchClick={() => { geyKeyCity() }}
                value={nameCity}
                onChange={setNameCity}
            />

        </div>
    )
}
export default Search;