import React from 'react';
import Sidebar from '../../components/Sidebar';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'

import styles from './queries.modules.css'
import Header from '../../components/Header'
import CardConsulta from '../../components/CardConsulta';

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
                    <h1 id="Title">Consultas agendadas</h1>
                    <div className="centered">
                        <CardConsulta name="e" date="12/12/2021" value="2"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Queries;