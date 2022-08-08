
import React from 'react';
import { useSelector } from 'react-redux'
import './currentWeather.css';

const CurrentWeather = () => {

    const initialNameCity = useSelector((state) => state.keyCity.nameCity);
    const initialCurrentWeather = useSelector((state) => state.currentWeather.currentWeather);

    const imgWeater = () => {
        let number = initialCurrentWeather.WeatherIcon;
        if (number < 9)
            return '0' + number;
        else
            return number;
    }
    const Value = () => {
        let value = initialCurrentWeather.Temperature.Metric.Value;
        return (value + '°');
    }

    if (initialCurrentWeather.length != 0) {
        return (
            <div className='current__weather'>
                <img
                    src={`https://developer.accuweather.com/sites/default/files/${imgWeater()}-s.png`}
                />

                {initialNameCity}
                <br />
                {Value()}
                {initialCurrentWeather.Temperature.Metric.Unit}
            </div>
        )
    }
    else {
        return ([])
    }
}
export default CurrentWeather;

