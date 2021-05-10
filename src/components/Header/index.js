import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

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