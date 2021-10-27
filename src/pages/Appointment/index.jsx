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

function Appointment() {
    
    const { psicologo, createSchedule, user } = useContext(AuthContext);
    const [ showPostModal, setShoePostModal ] = useState(false);
    const [ time, setTime] = useState(0);
    const [ date, setDate] = useState(0);
    const [ description, setDescription ] = useState("");

    const loadItem = () => {
        setShoePostModal(!showPostModal);
    }

    function selectedpsicologo(e){
        e.preventDefault();
        if(psicologo === "" || time === "" || date === "" || description === ""){
            toast.error("Verifique os campos")
        }else{
            createSchedule(psicologo, time, date, description, user.uid);
        } 
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Header name="Agendar consulta">
                    <BsReverseLayoutTextWindowReverse size={25} />
                </Header>
            </div>

            <div className="content">
                <div className="bodyContent">
                    <h1 id="Title">Informe os dados para agendar uma consulta</h1>
                    <form className="centered">
                        <InputPerson funcao={(e) => setTime(e.target.value)} type="time" />
                        <InputPerson funcao={(e) => setDate(e.target.value)} type="date"/>
                        <InputPerson placeholder={psicologo} hasIcon={true} funcao={()=>loadItem()}/>
                        <TextInputPerson funcao={(e) => setDescription(e.target.value)} placeholder="Descreva sua solicitação"/>
                        <ButtonPerson text="Agendar" func={selectedpsicologo} />
                    </form>
                </div>
            </div>

            {showPostModal && (
                <Modal
                    margem={200}
                    close={loadItem}
                />
            )}
        </div>
    );
}

export default Appointment;  