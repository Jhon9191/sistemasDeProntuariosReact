import React, { useContext, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'

import styles from './queries.modules.css'
import Header from '../../components/Header'
import CardConsulta from '../../components/CardConsulta';
import AlertMessage from '../../components/AlertMessage';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
function Queries() {

    const { cosultas, user, setUserSelected } = useContext(AuthContext);

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
                    {cosultas.length == 0 && user.tipo == "psicologo" && (
                        <AlertMessage text="Não existem consultas agendadas!" />
                    )}
                    {cosultas.length == 0 && user.tipo == "paciente" ? (
                        <div style={{ width: '100%' }}>
                            <AlertMessage text="Não existem consultas agendadas!" />
                            <Link className="buttonMarcar" to="Marcar" id="met">Marcar consulta</Link>
                        </div>
                    ) : (
                        <div style={{ width: '100%' }}>
                            <h1 id="Title">Consultas agendadas</h1>
                            <div className="centered">
                                {user.tipo == "psicologo" ? (
                                    <>
                                        {cosultas.map((item) => {
                                            return (
                                                <CardConsulta
                                                    key={item.id}
                                                    direction={()=>setUserSelected({
                                                        name:item.pacienteName,
                                                        id:item.id 
                                                    })}
                                                    name={item.pacienteName}
                                                    date={item.date}
                                                    value={item.status}
                                                />);
                                        })}
                                    </>
                                ) : (
                                    <>
                                        {cosultas.map((item) => {
                                            return (
                                                <CardConsulta
                                                    key={item.id}
                                                    name={item.psicologoName}
                                                    date={item.date}
                                                    value={item.status}
                                                />);
                                        })}
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Queries;