import React from 'react';
import Sidebar from '../../components/Sidebar';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'

import styles from './queries.modules.css'
import Header from '../../components/Header'
import CardConsulta from '../../components/CardConsulta';
import AlertMessage from '../../components/AlertMessage';
import { Link } from 'react-router-dom';
import firebase from '../../services/firebase'
function Queries() {
    return (
        <div>
            <Sidebar />

            <div className="content">
                <Header name="Consultas">
                    <BsReverseLayoutTextWindowReverse size={25} />
                </Header>
            </div>

            <div className="content">
                <div className="bodyContent">
                    {1 == 1 ? (
                        <div style={{ width: '100%' }}>    
                        <AlertMessage text="Não existem consultas agendadas!" />
                        <Link className="buttonMarcar" to="Marcar" id="met">Marcar consulta</Link>
                        </div>
                    ) : (
                        <div style={{ width: '100%' }}>
                            <h1 id="Title">Consultas agendadas</h1>
                            <div className="centered">
                                <CardConsulta name="e" date="12/12/2021" value="2" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Queries;