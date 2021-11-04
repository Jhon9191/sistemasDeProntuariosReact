import React, { useContext, useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { FiUser } from 'react-icons/fi'
import Header from '../../components/Header'
import styles from './styles.css';
import CardPsicologos from '../../components/CardPsicologos'
import Paginator from '../../components/Paginator';
import AlertMessage from '../../components/AlertMessage';
import { AuthContext } from '../../context/auth';
import firebase from "../../services/firebase"

const Psicologos = () => {

    // const history = useHistory();
    // const location = useLocation();

    //const [ page, setPage ] = useState(
    const { list, list2, user , listPacientes, setPage} = useContext(AuthContext);

    return (
        <div >
            <Sidebar />
            <div className="content">
                {user.tipo === "psicologo" ? (
                    <Header name="Pacientes">
                        <FiUser size={25} />
                    </Header>
                ) : (
                    <Header name="Psicologos">
                        <FiUser size={25} />
                    </Header>
                )}
            </div>

            <div className="content">
                    <div className="bodyContent">
                        {list.length == 0 ? (
                            <AlertMessage text="Não existem pacientes!" />
                        ) : (
                            <div style={{ width: '100%' }} >
                                <h1 id="Title">Lista de pacientes</h1>
                                {list2.map((item) => {
                                    return (
                                        <CardPsicologos item={item} />
                                    )
                                })}
                                <Paginator /> 
                            </div>
                        )}
                    </div>
                    
            </div>
        </div>
    )
}

export default Psicologos;