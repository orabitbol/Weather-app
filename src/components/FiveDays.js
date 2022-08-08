import React from 'react';
import { useSelector } from 'react-redux'
import Day from './SingelDay'
import './fiveDays.css';

const FiveDays = () => {

    const initialfiveDays = useSelector((state) => state.fiveDays.fiveDays);

    const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu"];
    if (initialfiveDays != []) {
        return (
            <div>
                <div style={{display:'flex', justifyContent:'center' , }}>
                    {initialfiveDays.map((item, index) => {
                        return <Day key={index} Temperature={item.Temperature} daysOfTheWeek={daysOfTheWeek[index]} Day={item.Day} />
                    })}
                </div>

            </div>
        )
    }
    else {
        return ([])
    }
}

export default FiveDays;