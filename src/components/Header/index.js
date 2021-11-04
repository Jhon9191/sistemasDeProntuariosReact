import React from 'react';
import './styles.css';

const Header = ({ children, name }) => {
    return (
        <div className="title">
            {children}
            <span>{name}</span>

        </div>
    );
}

export default Header;