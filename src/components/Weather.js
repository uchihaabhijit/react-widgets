import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import axios from 'axios';
import Card from './subcomponents/Cards';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const Weather = ({options}) => {

    const [text, setText] = useState('');
    const [selectedTopic, setSelectedTopic] = useState(options[0]);
    const [results, setResults] = useState({});

    const SendRequest = async () => {
        const headers = {
            headers: {
            'Content-type': 'application/json',
          }
        };

        var url = null;
        if( selectedTopic.value == 'wf' ) {
            url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${text}&aqi=no`;
        } else if(selectedTopic.value == 'as') {
            url = `https://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${text}&dt=2021-06-20`;
        } else if(selectedTopic.value == 'sp') {
            url = `https://api.weatherapi.com/v1/sports.json?key=${API_KEY}&q=${text}`;
        }
        
        if( text ) {
            const { data } = await axios.get(url, headers);
            setResults(data.current);
        }
        
    };

    const ExecuteSearch = async () => {        
        await SendRequest();
    }

    useEffect(() => {

        if( text.length == 0 ) {
            setResults({});
        }
    }, [text]);


    return (
        <div style={{ padding: '10px 10px 10px 10px' }}>
            <Dropdown 
                label="Select a topic"
                options={options}
                selected={selectedTopic}
                onSelectedChange={setSelectedTopic}
            />
            
            <div className="ui form" style={{ marginTop: '10px' }}>
                <div className="field">
                    <label>Enter City</label>
                    <input type="text" onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            
            <div className="ui form" style={{ marginTop: '10px' }}>
                <div className="eight wide column">
                    <button className="ui primary button" onClick={() => ExecuteSearch()}>Search</button>
                </div>
            </div>

            <Card results={results} text={text}/>
        
        </div>
    );
};

export default Weather;