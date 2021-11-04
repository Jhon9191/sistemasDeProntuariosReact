import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import Header from '../../components/Header'

const QueriesAberta = () => {
    return(
        <div>
        <Sidebar />

        <div className="content">
            <Header name="Consultas">
                <BsReverseLayoutTextWindowReverse size={25} />
            </Header>
        </div>

        <div className="content">
            <div className="bodyContent">
                <h1 id="Title">Prontuários</h1>
                
            </div>
        </div>
    </div>
    );
}

export default QueriesAberta;
