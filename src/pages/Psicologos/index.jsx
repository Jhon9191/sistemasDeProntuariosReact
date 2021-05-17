import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { FiUser, FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import Header from '../../components/Header'
import styles from './styles.css';
import CardPsicologos from '../../components/CardPsicologos'
import Paginator from '../../components/Paginator';

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
                            <CardPsicologos item={item} />
                        )
                    })}
                    <Paginator />
                </div>
            </div>
        </div>
    )
}

export default Psicologos;