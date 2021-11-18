import React, { useContext, useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import Header from '../../components/Header'
import { Link } from 'react-router-dom';
import AlertMessage from '../../components/AlertMessage';
import { AuthContext } from '../../context/auth';
import CardProntuario from '../../components/CardProntuario';
import firebase from "../../services/firebase";
const QueriesAberta = () => {

    const { cosultas, user, userSelected } = useContext(AuthContext);
    const [name, setName] = useState("João");
    const [prontuarios, setProntuarios] = useState([]);

    const carregar = () => {
        firebase.firestore().collection("schedules")
            .doc(userSelected.id)
            .collection("prontuarios").get()
            .then((snapshot) => {
                updateProntuario(snapshot);
            })
    }

    const updateProntuario = (snapshot) => {
        let list = [];
        snapshot.forEach((doc) => {
            list.push({
                date: doc.data().date,
                time: doc.data().time,
                description: doc.data().description,
            })
        });
        setProntuarios(prontuarios => [...prontuarios, ...list]);
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
                    <h1 id="Title">Paciente: {userSelected.name}</h1>
                    {prontuarios.length == 0 && user.tipo == "psicologo" && (
                        <AlertMessage text="Não existem prontuários deste paciente!" />
                    )}
                    <div className="centered">
                        {prontuarios.map((prontuario) => {
                            return (
                                <CardProntuario
                                    date={prontuario.date}
                                    time={prontuario.time}
                                    description={prontuario.description}
                                />
                            );
                        })}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                        {prontuarios.length == 0 && (
                            <button className="buttonMarcarW" onClick={carregar}>Carregar prontuários</button>
                        )}
                        {user.tipo == "psicologo" && (
                            <Link className="buttonMarcar" style={{ marginLeft: 10 }} to="/Novo/Prontuario" id="met">Novo prontuário</Link>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default QueriesAberta;
