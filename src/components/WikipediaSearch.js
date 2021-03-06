import React, {useState, useEffect} from 'react';
import axios from 'axios';

const WikipediaSearch = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
       const search = async () => {
           const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
               params: {
                   action: 'query',
                   list: 'search',
                   origin: '*',
                   format: 'json',
                   srsearch: term
               }
           });

           setResults(data.query.search);
       }
       
       if( term.length == 0 ) {
           setResults([]);
       }

       const timeoutId = setTimeout(() => {
        if(term) {
            search();
        }
       }, 500)
        
        return () => {
            clearInterval(timeoutId);
        }
       
    }, [term]);

    const renderedItems = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });
    return (
        <div style={{ padding: '10px 10px 10px 10px' }}>
            <div className="ui form">
                <div className="field">
                    <label>Search: </label>
                    <input 
                    className="input"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedItems}
            </div>
        </div>
    );
}; 


export default WikipediaSearch;