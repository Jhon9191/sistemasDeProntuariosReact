import React, { useState } from "react";
import { FiArrowDown, FiArrowUp, FiCalendar, FiClock } from 'react-icons/fi'

import { Link } from 'react-router-dom';


const CardProntuario = ({ children, time, date, description }) => {
    const [desc, setDesc] = useState(false);

    const alterar = () => {
        setDesc(!desc)
    }

    return (
        <div style={{
            width: '95%',
            backgroundColor: "#860638",
            justifyContent: 'space-between',
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            padding: 10,
            borderRadius: 8,
            marginBottom: 10
        }}>
            {children}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h4>{date}</h4>
                        <FiCalendar size={25} style={{ marginLeft: 5 }} color="#fff" />
                    </div>
                    <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h4>{time}</h4>
                        <FiClock size={25} style={{ marginLeft: 5 }} color="#fff" />
                    </div>
                </div>
                {desc == true && (
                    <div style={{ 
                    backgroundColor: "#fff", 
                    width: '97%', 
                    borderRadius: 3,
                    marginTop: 10,
                    alignItems: 'center'}}>
                        <h4 style={{ 
                            marginTop: 10, 
                            padding: 7,
                            color: '#d70052' ,
                            marginLeft: 7
                            }}>{description}</h4>
                    </div>
                )}
            </div>
            <Link to="consultaAberta" id="met">
                {desc == true ? (
                    <FiArrowUp style={{ cursor: "pointer" }} onClick={alterar} size={25} color="#fff" />
                ) : (
                    <FiArrowDown style={{ cursor: "pointer" }} onClick={alterar} size={25} color="#fff" />
                )}
            </Link>
        </div>
    )
}

export default CardProntuario;