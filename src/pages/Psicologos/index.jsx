import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { FiUser } from 'react-icons/fi'
import Header from '../../components/Header'
import styles from './styles.css';

const Psicologos = () => {

    const [list, setList] = useState([
        { id: 1, nome: "Joao", especialidade: "Adultos" },
        { id: 2, nome: "Jamil", especialidade: "Acidentes de carro" },
        { id: 3, nome: "Alef", especialidade: "Traumas" },
    ]);

    return (
        <div>
            <Sidebar />
            <div className="content">
                <Header name="Dashboard">
                    <FiUser size={25} />
                </Header>
            </div>

            <div className="content">
                <div className="bodyContent">
                    {list.map((item) => {
                        return (

                            <div className="cardPsicologos" style={{backgroundColor: 
                            item.id % 2 == 1 ? '#860638' : '#AA0948'
                            }} key={item.id}>
                                <div style={{ flexDirection: 'row', display: 'flex'}}>
                                    <FiUser size={70} color="#fff" />
                                    <div>
                                        <h2>Nome: {item.nome}</h2>
                                        <h4>Especialidade: {item.especialidade}</h4>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Psicologos;