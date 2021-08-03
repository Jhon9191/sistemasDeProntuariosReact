import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { FiUser, FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import Header from '../../components/Header'
import styles from './styles.css';
import CardPsicologos from '../../components/CardPsicologos'
import Paginator from '../../components/Paginator';
import { AuthContext } from '../../context/auth'
import { useLocation, useHistory } from 'react-router-dom'


const Psicologos = () => {

    // const history = useHistory();
    // const location = useLocation();

    // const [ page, setPage ] = useState(
        
    // );
    const { list2 } = useContext(AuthContext);

    return (
        <div >
            <Sidebar />
            <div className="content">
                <Header name="Psicologos">
                    <FiUser size={25} />
                </Header>
            </div>

            <div className="content">
                <div className="bodyContent">
                <h1 id="Title">Psicologos disponiveis</h1>
                    {list2.map((item) => {
                        return (
                            <CardPsicologos item={item} />
                        )
                    })}
                    <Paginator />
                </div>
            </div>
        </div>
    )
}

export default Psicologos;