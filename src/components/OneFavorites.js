import React from 'react';

import './oneFavorites.css'

const OneFavorites = (props) =>{

    const getNameCity = () =>{
        let name = props.nameCity;
        return console.log(name);
    }

    // const getValue = () =>{
    //     let value = props.value;
    //     console.log(value);
    //     return(value + '°');
    // }
    // const getUnit = () =>{
    //     let unit = props.unit;
    //     console.log(unit);
    //     return(unit);
    // }
    // const getWeaterText = () =>{
    //     let weaterText = props.weaterText;
    //     console.log(weaterText);
    //     return(weaterText);
    // }




    return (
        <div>
            {getNameCity()} <br/>
            {/* {getValue()} {getUnit()}
            <br/>
            {getWeaterText()} */}

        </div>
    )
}



export default OneFavorites;