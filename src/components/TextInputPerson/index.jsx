import React from 'react';
import './styles.css';
import { BsFillCaretDownFill} from 'react-icons/bs'

function TextInputPerson({ children, placeholder, funcao }) {
    return (
        <div className="Textinput">
            {children}
            <textarea onChange={funcao} placeholder={placeholder} maxLength={150}/>
        </div>
    );
}

export default TextInputPerson;