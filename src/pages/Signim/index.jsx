import React, { useState } from 'react';
import styles from './styles.css';

import { Link } from 'react-router-dom'
const Signim = () => {

    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div class="img">
            <div class="opac">
                <div className="login">
                    {/* <h1>Olá</h1> */}
                    <form>
                        <h1>Entrar</h1>
                        <input onChange={(e) => setCpf(e.target.value)} type="text" placeholder="CPF:" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="SENHA:" />
                        <button type="submit">Login</button>
                    </form>

                    <Link to="/register">Criar uma nova conta</Link> 
                </div>
            </div>
        </div>


    );
}

export default Signim;
