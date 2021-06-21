import React from 'react'

const Cards = ({ results, selectedTopic }) => {

    if( selectedTopic == 'wf' ) {

        if( results.current ) {
            const current = results.current;
            const weather_data = [];
            for(var key in current) {
                var obj = {};
                if(current.hasOwnProperty(key)) {
                    obj['label'] = key;
                    obj['value'] = current[key];
                    weather_data.push(obj);
                }
            }

            var renderedCard = weather_data.map((weather) => {
                return (
                    <div className="ui card" key={weather.label}>
                        <div className="content">
                            <div className="header">{weather.label}</div>
                            <div className="description">{(weather.label == 'condition') ? weather.value.text : weather.value}</div>
                        </div>
                    </div>
                );
            });  
        }
          
    } else if( selectedTopic == 'as' ) {

        if( results.astronomy ) {
            const astronomy = results.astronomy.astro;
            const astronomy_data = [];
            for(var key in astronomy) {
                var obj = {};
                if(astronomy.hasOwnProperty(key)) {
                    obj['label'] = key;
                    obj['value'] = astronomy[key];
                    astronomy_data.push(obj);
                }
            }

            var renderedCard = astronomy_data.map((astro) => {
                return (
                    <div className="ui card" key={astro.label}>
                        <div className="content">
                            <div className="header">{astro.label}</div>
                            <div className="description">{ astro.value}</div>
                        </div>
                    </div>
                );
            });
        }
    } else if( selectedTopic == 'sp' ) {

        if( results.football ) {
            var i = 0;
            var renderedCard = results.football.map((f) => {
                i++;
                return (
                    <div className="ui card" key={i}>
                        <div className="content">
                            <div className="header">{f.tournament}</div>
                            <div className="description">{ f.country}</div>
                            <div className="description">{ f.match}</div>
                            <div className="description">{ f.stadium}</div>
                            <div className="description">{ f.start}</div>
                        </div>
                    </div>
                );
            });   
        }
        
    }

    const Heading = () => {
        
        if( Object.keys(results).length !== 0 ) {
            if( selectedTopic == 'wf' ) {
                return <h2 className="ui hidden divider" style={{ marginTop: '1em', fontSize: '2em' }}>Weather Conditions</h2>
            } else if( selectedTopic == 'as' ) {
                return <h2 className="ui hidden divider" style={{ marginTop: '1em', fontSize: '2em' }}>Astronomy</h2>
            } else {
                return <h2 className="ui hidden divider" style={{ marginTop: '1em', fontSize: '2em' }}>Football</h2>
            }
        } else {
            return null;
        }
    }
    

    return (
        <div>
            { Heading() }
            <div className="ui cards" style={{ marginTop: '2em' }}>
                { renderedCard }
            </div>
        </div>
    ); 
    
};

export default Cards