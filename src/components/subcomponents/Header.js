import React from 'react';
import Link from './Link';

const Header = () => {

    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">Home</Link>
            <Link href="/wiki-search" className="item">Wiki Search</Link>
            <Link href="/weather" className="item">Weather</Link>
        </div>
    );
};

export default Header;