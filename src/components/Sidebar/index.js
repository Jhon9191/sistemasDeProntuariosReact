import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import './styles.css';

const Sidebar = () => {
    return (
        <div className="navegation">
            <div>
            </div>
            <Link to="/dashboard">
                <FiHome size={24} color="#fff" />
                Dashboard
            </Link>

            <Link to="/psicologos">
                <FiUser size={24} color="#fff" />
                Psicólogos
            </Link>

            <Link to="/">
                <BsReverseLayoutTextWindowReverse size={24} color="#fff" />
                Consultas
            </Link>

            <Link to="/profile">
                <FiSettings size={24} color="#fff" />
                Perfil
            </Link>

        </div>
    )
}

export default Sidebar;