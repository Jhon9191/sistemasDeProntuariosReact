import React from "react";
import { FiArrowRight } from 'react-icons/fi'

const CardConsulta = ({ children, name, date, value, direction }) => {
    return (
        <div style={{
            width: '95%',
            backgroundColor: "#860638",
            justifyContent: 'space-between',
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center', 
            padding: 10, 
            borderRadius: 8 
        }}>
            {children}
            <div style={{}}>
                <div style={{ display: 'flex',flexDirection: 'row'}}>
                    <h2 style={{ color: "#fff", fontSize: 20 }}>Psicologo: </h2>
                    <h2 style={{ color: "#fff", fontSize: 20 }}>{name}</h2>
                </div>
                <div style={{ display: 'flex',flexDirection: 'row'}}>
                    <h2 style={{ color: "#fff", fontSize: 20 }}>Data: </h2>
                    <h2 style={{ color: "#fff", fontSize: 20 }}>{date}</h2>
                </div>
                   <div style={{ display: 'flex',flexDirection: 'row'}}>
                    <h2 style={{ color: "#fff", fontSize: 20 }}>Status: </h2>
                    <h2 style={{ color: "#fff", fontSize: 20 }}>{value}</h2>
                </div>
            </div>
            <FiArrowRight style={{cursor: "pointer"}} onClick={direction} size={25} color="#fff"/>
        </div>
    )
}

export default CardConsulta;