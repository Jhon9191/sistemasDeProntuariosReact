import { useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import { FiHome, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi'
import './styles.css';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className="content">
                
            </div>
        </div>
    )
}

export default Dashboard;