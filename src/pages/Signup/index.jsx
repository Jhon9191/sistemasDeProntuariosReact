import React, { useState } from 'react';
import styles from './styles.css';

import { Link } from 'react-router-dom'

const Signup = () => {

    const [ cpf, setCpf ] = useState(""); 
    const [ email, setEmail ] = useState(""); 
    const [ name, setName ] = useState(""); 
    const [ password, setPassword ] = useState("");
    const [ repeatPassword, setRepeatPassword ] = useState("");

    return (
        <div className="img">
            <div className="opac">
                <div className="formulario">
                    <form>
                        <h2>Cadastrar</h2>
                        <input onChange={(e) => setCpf(e.target.value)} type="text" placeholder="CPF:" />
                        <input onChange={(e) => setEmail(e.target.value)} type="e-mail" placeholder="Nome:" />
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Email:" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha:" />
                        <input onChange={(e) => setRepeatPassword(e.target.value)} type="password" placeholder="Repetir senha:" />
                        <button type="submit">Login</button>
                        <div style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                            <input className="check" type="checkbox" defaultChecked={() => { }} onChange={() => { }} />
                            <spam id="spamCheck" >Mantenha-me conectado</spam>
                        </div>

                    </form>
                    <Link id="linkto" to="/">Já possuo uma conta</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
