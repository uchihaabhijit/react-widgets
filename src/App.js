import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import options from './components/Contents';
import Weather from './components/Weather';

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        // <Search />
        // <Accordion />
        <Weather 
            options={options} 
            selected={selected}
            onSelectedChange={setSelected}
        />

    );
};