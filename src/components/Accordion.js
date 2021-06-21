import React, {useState} from 'react';


const items = [
    {
        'title': 'Who is the creator of this project?',
        'content': 'Abhijit Borkakoty'
    },
    {
        'title': 'What is the Wiki Search widget',
        'content': 'Search widget allow users to search for a term from Wikipedia and display it on the page itself. I have used the Wikipedia Search API to fetch the results. Also, I have implemented the concept of Debouncing which is to delay the execution of API requests in a controller manner.'
    },
    {
        'title': 'What is the Weather widget',
        'content': 'In the Weather widget, I basically create a custom dropdown selection component to understand the concept of Event Bubbling. On entering a city name and clicking search, every details about the city like weather forecast, astronomy and ongoing football matches all over the world appears.'
    }
];


const Accordion = ()  => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active}`}
                    style={{ color: '#ec3323' }}
                    onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;