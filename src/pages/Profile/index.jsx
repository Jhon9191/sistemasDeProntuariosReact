import React, { useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

import Header from '../../components/Header'
import styles from './styles.css';
import InputPerson from '../../components/InputPerson';
import { Link } from 'react-router-dom';
import ButtonPerson from '../../components/ButtonPerson';
import { AuthContext } from '../../context/auth';

function Appointment() {

    const { logoutUser } = useContext(AuthContext)

    function logout() {
        logoutUser();
    }

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
                        <ButtonPerson text="Sair" func={logout}/>
                        <Link className="recuperar" to="Marcar" >Recuperar senha</Link>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Appointment;