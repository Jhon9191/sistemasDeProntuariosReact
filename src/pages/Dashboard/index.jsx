import { useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import { FiHome, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi'
import './styles.css';

import Header from '../../components/Header'
const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className="content">
                <Header name="Dashboard">
                    <FiHome size={25} />
                </Header>
            </div>
        </div>
    )
}

export default Dashboard;