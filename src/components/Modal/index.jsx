import './Modal.css';

import { FiX } from 'react-icons/fi';


export default function Modal({emote, close, title, subtitle}){
  return(
    <div className="modal">
      <div className="container">
        <button className="close" onClick={ close }>
          <FiX size={23} color="#FFF" />
        </button>
          <span style={{fontSize: 30}}>{emote}</span>
          <h1>{title}</h1>
          <span style={{max}}>{subtitle}</span>
      </div>
    </div>
  )
}