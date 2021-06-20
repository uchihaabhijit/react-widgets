import React, {useState} from 'react';


const items = [
    {
        'title': 'Who is the creator of this project?',
        'content': 'Abhijit Borkakoty'
    },
    {
        'title': 'What is the Search tab',
        'content': 'Search widget allow users to search for a term from Wikipedia and display it on the page itself. I have used the Wikipedia Search API to fetch the results. Also, I have implemented the concept of Debouncing which is to delay the execution of API requests in a controller manner.'
    },
    {
        'title': 'What is the Color tab',
        'content': 'In the Color widget, I basically create a custom dropdown selection component to understand the concept of Event Bubbling'
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