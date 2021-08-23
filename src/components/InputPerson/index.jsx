import React from 'react';
import './styles.css';
import { BsFillCaretDownFill } from 'react-icons/bs'

function InputPerson({ children, placeholder, hasIcon, type, funcao }) {
    return (
        <div>
            {hasIcon === true ? (
                <div className="input">
                    {children}
                    <spam>{placeholder}</spam>
                    <BsFillCaretDownFill className="button" onClick={funcao} size={20} color="rgba(215, 0, 82)" />
                </div>
            ) : (
                <input className="input" onChange={funcao} placeholder={placeholder} type={type} min="0" max="5"/>
            )}
        </div>
    );
}

export default InputPerson;