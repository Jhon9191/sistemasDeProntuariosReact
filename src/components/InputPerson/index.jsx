import React from 'react';
import './styles.css';
import { BsFillCaretDownFill} from 'react-icons/bs'

function InputPerson({ children, placeholder, hasIcon }) {
    return (
        <div className="input">
            {children}
            <input placeholder={placeholder}/>
            {hasIcon === true ?  (
            <BsFillCaretDownFill size={20} color="#FFF"/>
            ): (<></>)}
        </div>
    );
}

export default InputPerson;