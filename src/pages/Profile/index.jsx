import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

import Header from '../../components/Header'
import styles from './styles.css';
import InputPerson from '../../components/InputPerson';
import { Link } from 'react-router-dom';
import ButtonPerson from '../../components/ButtonPerson';
import { AuthContext } from '../../context/auth';
import firebase from '../../services/firebase';

function Appointment() {

    const { logoutUser, user } = useContext(AuthContext)
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");

    function logout() {
        logoutUser();
    }

    function updateInformations() {
        if (name !== "") {
            firebase.firestore().collection('users')
                .doc(user.uid).update({
                    name: name
                })
        }
        if (cpf !== "") {
            firebase.firestore().collection('users')
                .doc(user.uid).update({
                    cpf: cpf
                })
        }
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
                        <InputPerson funcao={(e) => setName(e.target.value)} type="text" placeholder="Nome:" />
                        <InputPerson funcao={(e) => setCpf(e.target.value)} type="text" placeholder="CPF:" />
                        <ButtonPerson func={updateInformations} text="Salvar alterações" />
                        <ButtonPerson text="Sair" func={logout} />
                        <Link className="recuperar" to="Marcar" >Recuperar senha</Link>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Appointment;