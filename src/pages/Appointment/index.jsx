import React, { useState, useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import { AuthContext } from '../../context/auth';
import Header from '../../components/Header'
import styles from './styles.css';
import InputPerson from '../../components/InputPerson';
import TextInputPerson from '../../components/TextInputPerson';
import ButtonPerson from '../../components/ButtonPerson';
import Modal from '../../components/Modal'

function Appointment() {
    
    const { psicologo } = useContext(AuthContext);
    const [showPostModal, setShoePostModal] = useState(false);

    const loadItem = () => {
        setShoePostModal(!showPostModal);
    }
    function selectedpsicologo(e){
        e.preventDefault();
        console.log(psicologo)
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
                        <InputPerson type="time"/>
                        <InputPerson type="date"/>
                        <InputPerson placeholder={psicologo} hasIcon={true} funcao={()=>loadItem()}/>
                        <TextInputPerson placeholder="Descreva sua solicitação"/>
                        <button type="submit" onClick={selectedpsicologo}>Agendar</button>
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