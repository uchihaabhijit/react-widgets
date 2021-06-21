import React, {useState} from 'react';
import Accordion from './components/Accordion';
import WikipediaSearch from './components/WikipediaSearch';
import options from './components/Contents';
import Weather from './components/Weather';
import Route from './components/subcomponents/Route';
import Header from './components/subcomponents/Header';

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion />
            </Route>

            <Route path="/wiki-search">
                <WikipediaSearch />
            </Route>

            <Route path="/weather">
                <Weather options={options} 
                selected={selected}
                onSelectedChange={setSelected} />
            </Route>
        </div>



    );
};