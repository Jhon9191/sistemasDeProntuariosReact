import React, { useContext } from 'react';
import './Modal.css';
import { AuthContext } from '../../context/auth';

import { FiX } from 'react-icons/fi';


export default function Modal({ emote, close, title, subtitle, margem, psicologoSelected }) {

  const { list2, setPsicologo } = useContext(AuthContext);

  function setar(item){
    //console.log(item)
    setPsicologo(item);
  }

  return (
    <div className="modal" >
      <div className="container" style={{ left: margem }}>
        <button className="close" onClick={close}>
          <FiX size={23} color="#FFF" />
        </button>
        {list2.map((item, index) => {
          return (
            <div key={index} style={{cursor: "pointer", marginBottom: 6}} onClick={()=>setar(item)}>
              <h1 style={{fontSize: 20, color:"#D70052"}}>{item.name}</h1>
              <div style={{height: 1, backgroundColor: "#D70052", width:'100%' }}></div>
            </div>
          )
        })}                             
        {/* <span style={{fontSize: 30}}>{emote}</span>
          <h1>{title}</h1>
          <span>{subtitle}</span> */}
      </div>
    </div>
  )
}