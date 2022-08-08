import React from 'react';
import './singelDay.css';

const SingelDay = (props) => {

    const imgWeater = () => {
        let string = IconFarDay();
        if (string < 9)
            return '0' + string;
        else
            return string;
    }
    const ValueMinimum = () => {
        let value = props.Temperature.Minimum.Value
        return (value + '°');
    }
    const ValueMaximum= () => {
        let value = props.Temperature.Maximum.Value
        return (value + '°');
    }
    const showMinimum = () => {
        return (
            ValueMinimum() + ' ' +
            props.Temperature.Minimum.Unit
        );
    }
    const showMaximum = () => {
        return (
            ValueMaximum() + ' ' +
            props.Temperature.Maximum.Unit
        );
    }
    const IconFarDay = () => {
        return (
           props.Day.Icon
            
        );
    }

    return (
        <div className = 'main'>
            <img
        
                src={`https://developer.accuweather.com/sites/default/files/${imgWeater()}-s.png`}
            />
            <div>
               <h4 style={{color:'white'}}> Min: {showMinimum()} </h4>
               <h4 style={{color:'white'}}> Max:  {showMaximum()} </h4>
            </div>
        </div>
    )
}

export default SingelDay;