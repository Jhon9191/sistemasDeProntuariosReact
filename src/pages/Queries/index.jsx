import React from 'react';
import Sidebar from '../../components/Sidebar';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

import Header from '../../components/Header'
import styles from './styles.css';
import InputPerson from '../../components/InputPerson';
import { Link } from 'react-router-dom';
import TextInputPerson from '../../components/TextInputPerson';
import ButtonPerson from '../../components/ButtonPerson';

function Appointment() {
    return (
        <div>
            <Sidebar />

            <div className="content">
                <Header name="Perfil">
                    <FiUser size={25} />
                </Header>
            </div>

            <div className="content">
                <div className="bodyContent">
                    <h1 id="Title">Seu perfil</h1>
                    <form className="centered">
                        <InputPerson type="text" placeholder="Nome:"/>
                        <InputPerson type="text" placeholder="Email:"/>
                        <InputPerson type="text" placeholder="CPF:"/>
                        <ButtonPerson text="Salvar alterações"/>
                        <Link className="recuperar" to="Marcar" >Recuperar senha</Link>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Appointment;