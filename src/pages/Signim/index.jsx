import React, { useState } from 'react';
import styles from './styles.css';

import { Link } from 'react-router-dom'
const Signim = () => {

    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="img">
            <div className="opac">
                <div className="formulario">
                    {/* <h1>Olá</h1> */}
                    <form>
                        <h2>Entrar</h2>
                        <input onChange={(e) => setCpf(e.target.value)} type="text" placeholder="CPF:" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha:" />
                        <button type="submit">Login</button>
                        <Link id="linkto" to="/register">Esqueci minha senha</Link>
                        <div style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                            <input className="check" type="checkbox" defaultChecked={() => { }} onChange={() => { }} />
                            <spam id="spamCheck" >Mantenha-me conectado</spam>
                        </div>

                    </form>
                    <Link id="linkto" to="/register">Criar uma nova conta</Link>
                </div>
            </div>
        </div>


    );
}

export default Signim;
