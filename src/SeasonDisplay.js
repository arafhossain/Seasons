import React from 'react';

const seasonConfig = {
    Summer: {
        phrase: 'To the beach!',
        iconName: 'sun'
    },
    Winter: {
        phrase: 'Yikes, too cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        if (lat > 0) {
            return 'Summer';
        } else {
            return 'Winter';
        }
    } else {
        if (lat > 0) {
            return 'Winter';
        } else {
            return 'Summer';
        }
    }
}

const SeasonDisplay = (props) => {
    const Season = getSeason(props.lat, new Date().getMonth());
    const { phrase, iconName } = seasonConfig[Season];

    return (
        <div>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{phrase}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;