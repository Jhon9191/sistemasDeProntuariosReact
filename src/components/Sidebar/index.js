import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import './styles.css';
import { AuthContext } from '../../context/auth';

const Sidebar = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="navegation">
            <div>
            </div>
            {user.tipo == "psicologo" ? (
                <Link to="/dashboard/psicologo">
                    <FiHome size={24} color="#fff" />
                    Dashboard
                </Link>
            ) : (
                <Link to="/dashboard">
                    <FiHome size={24} color="#fff" />
                    Dashboard
                </Link>
            )}

            <Link to="/psicologos">
                <FiUser size={24} color="#fff" />
                Psicólogos
            </Link>

            <Link to="/consultas">
                <BsReverseLayoutTextWindowReverse size={24} color="#fff" />
                Consultas
            </Link>

            <Link to="/Profile">
                <FiSettings size={24} color="#fff" />
                Perfil
            </Link>

        </div>
    )
}

export default Sidebar;