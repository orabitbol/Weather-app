import CurrentWeather from '../components/CurrentWeather';
import FiveDays from '../components/FiveDays';
import Header from '../components/Header';
import Search from '../components/Search';
import './home.css'
import { useSelector, useDispatch } from 'react-redux'
import { favoritesActions } from '../store/favoritesSlice'

const Home = () => {

    const dispatch = useDispatch();
    const initialNameCity = useSelector((state) => state.keyCity.nameCity);
    const initialCurrentWeather = useSelector((state) => state.currentWeather.currentWeather);

    const initialFavorites = useSelector((state) => state.favorites.favorites);



    const addToFavorites = () => {
        let nameCity = initialNameCity;
        let value = initialCurrentWeather.Temperature.Metric.Value;
        let unit = initialCurrentWeather.Temperature.Metric.Unit;
        let weaterText = initialCurrentWeather.WeatherText;

        dispatch(favoritesActions.getFavorites([{ nameCity, value, unit, weaterText}]));

    }



    return (
        <div className="home">
            <Header />
            <Search />
            <div className='position__favorite'>
                <button onClick={addToFavorites} className='favorite__button'>Add To Favorite</button>
            </div>
            <CurrentWeather />
            <FiveDays />

        </div>
    )
}

export default Home;