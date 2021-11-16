import React, { useState, useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import { toast } from 'react-toastify'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import { AuthContext } from '../../context/auth';
import Header from '../../components/Header'
import styles from './styles.css';
import InputPerson from '../../components/InputPerson';
import TextInputPerson from '../../components/TextInputPerson';
import ButtonPerson from '../../components/ButtonPerson';
import Modal from '../../components/Modal'
import { useHistory } from 'react-router-dom';

import firebase from "../../services/firebase"

function NewRecord() {

    const history = useHistory()
    const { userSelected, user } = useContext(AuthContext);
    const [time, setTime] = useState(0);
    const [date, setDate] = useState(0);
    const [description, setDescription] = useState("");


    function selectedpsicologo(e) {
        e.preventDefault();
        firebase.firestore().collection('schedules')
            .doc(userSelected)
            .collection('prontuarios')
            .doc().set({
                time: time,
                date: date,
                description: description,
                status: 'Em andamento'
            })
    }

    return (
        <div>
            <Sidebar />
            <div className="content">
                <Header name="Prontuários">
                    <BsReverseLayoutTextWindowReverse size={25} />
                </Header>
            </div>

            <div className="content">
                <div className="bodyContent">
                    <h1 id="Title">Cadastro de prontuário</h1>
                    <form className="centered">
                        <InputPerson funcao={(e) => setTime(e.target.value)} type="time" />
                        <InputPerson funcao={(e) => setDate(e.target.value)} type="date" />
                        <TextInputPerson funcao={(e) => setDescription(e.target.value)} placeholder="Descreva o atendimento" />
                        <ButtonPerson text="Agendar" func={selectedpsicologo} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewRecord;