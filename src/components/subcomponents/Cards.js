import React from 'react'

const Cards = ({ results, text }) => {

    const weather_data = [];
    for(var key in results) {
        var obj = {};
        if(results.hasOwnProperty(key)) {
            obj['label'] = key;
            obj['value'] = results[key];
            weather_data.push(obj);
        }
    }

    const renderedCard = weather_data.map((weather) => {
        return (
            <div className="ui card" key={weather.label}>
                <div className="content">
                    <div className="header">{weather.label}</div>
                    <div className="description">{(weather.label == 'condition') ? weather.value.text : weather.value}</div>
                </div>
            </div>
        );
    });
    
    return (
        <div className="ui cards" style={{ marginTop: '2em' }}>
            {renderedCard}
        </div>
    );
    
};

export default Cards