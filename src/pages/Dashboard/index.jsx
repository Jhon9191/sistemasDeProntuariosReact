import { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';
import { FiHome, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi'
import './styles.css';

import Header from '../../components/Header'
import CardDashboard from '../../components/CardDashboard';
const Dashboard = () => {
    const [name, setName] = useState("João")
    
    return (
        <div>
            <Sidebar />
            <div className="content">
                <Header name="Dashboard">
                    <FiHome size={25} />
                </Header>
            </div>

            <div className="content">
                <div className="bodyContent">
                    <h1 id="Title">Seja bem vindo paciente {name}</h1>
                    <CardDashboard name="Quantidade de consultas" color="roxo" value={0} />
                    <CardDashboard name="Quantidade de psicólogos" color="roxso" value={0} />
                    <button>
                        <Link to="Marcar" id="met">Marcar consulta</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;