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
import Modal from '../../components/Modal'

function Appointment() {

    const { logoutUser, user, setUser, storageUser } = useContext(AuthContext)
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [ showPostModal, setShoePostModal ] = useState(false);

    function logout() {
        logoutUser();
    }

    const loadItem = () =>{
        setShoePostModal(!showPostModal);
    }

    function updateInformations() {
        if (name !== "") {
            firebase.firestore().collection('users')
                .doc(user.uid).update({
                    name: name
                }).then(()=>{
                    let data = {
                        ...user, 
                        name: name
                    }
                    setUser(data);
                    storageUser(data);
                    loadItem();
                })
        }
        if (cpf !== "") {
            firebase.firestore().collection('users')
                .doc(user.uid).update({
                    cpf: cpf
                }).then(()=>{
                    let data = {
                        ...user, 
                        cpf: cpf
                    }
                    setUser(data);
                    storageUser(data);
                    loadItem();
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
            {showPostModal && (
                <Modal
                    margem={200}
                    emote="😄"
                    title="Prontinho!"
                    subtitle="Dados alterados com sucesso!"
                    close={loadItem}
                />
            )}

        </div>
    );
}

export default Appointment;