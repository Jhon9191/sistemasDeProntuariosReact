import React from 'react';
import { FiAlertCircle } from 'react-icons/fi'

function AlertMessage({ children, text }) {
  return (
      <div style={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%'  
        }}>
          {children}
          <FiAlertCircle size={25} color="#262626"/>
          <h2 style={{color: "#262626", marginTop: 15}}>{text}</h2>
      </div>
  );
}

export default AlertMessage;