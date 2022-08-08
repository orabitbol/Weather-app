import React from 'react';
import { useSelector } from 'react-redux'
import OneFavorites from '../components/OneFavorites';
import { favoritesActions } from '../store/favoritesSlice'


const Favorites = () => {


        const initialFavorites = useSelector((state) => state.Favorites.favorites);

    const button = () => {
        console.log(initialFavorites[0].nameCity);
    }

    if (initialFavorites.length > 1) {
        return (
            <div className='favorites__page'>
                <button onClick={button}>click me</button>
                {initialFavorites.map((item, index) => {
                    return <OneFavorites key={index} nameCity={[index].item.nameCity} value={[index].item.value} unit={[index].item.unit} weaterText={[index].item.weaterText} />
                })}
            </div>
        )
    }
    else {
        return (
            <div className='favorites__page'>
                <h1>sfdadsa</h1>
            </div>

        )
    }
}

export default Favorites;