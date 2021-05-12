import React from "react";
const CardDashboard = ({ children, name, color, value }) => {
    return (

            <div style={{
                backgroundColor: `${color === "roxo" ? "#860638" : "#AA0948"}`,
                borderRadius: 5,
                width: '95%',
                height: 130,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 25
            }}>
                {children}
                <h1 style={{paddingLeft: 15, color:"#FFF"}}>{name}</h1>
                <h1 style={{paddingRight: 15, color:"#FFF"}}>{value}</h1>
            </div>
    )
}

export default CardDashboard;