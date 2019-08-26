import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        if(lat > 0){
            return 'Summer';
        } else {
            return 'Winter';
        }
    } else {
        if(lat > 0){
            return 'Winter';
        } else {
            return 'Summer';
        }
    }
}

const SeasonDisplay = (props) =>{
    const Season = getSeason(props.lat, new Date().getMonth());
    let phrase = Season === 'winter' ? 'Yikes, too cold!' : 'To the beach!'
    return (
        <h1>{phrase}</h1>
    )
}

export default SeasonDisplay;