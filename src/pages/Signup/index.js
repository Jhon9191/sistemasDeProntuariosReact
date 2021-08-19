import React, { useState, useContext, useEffect } from 'react';
import styles from './styles.css';

import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth';
const Signup = () => {

    const { signup } = useContext(AuthContext)

    const [ cpf, setCpf ] = useState(""); 
    const [ email, setEmail ] = useState(""); 
    const [ name, setName ] = useState(""); 
    const [ password, setPassword ] = useState("");
    const [ repeatPassword, setRepeatPassword ] = useState("");
    const [ repeatPasswordEmpty, setRepeatPasswordEmpty ] = useState(false);
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [passwordEmpty, setPasswordEmpty] = useState(false);
    const [iqualPassword, setQualPassword] = useState(false);
    const [ cpfEmpty, setCpfEmpty ] = useState(false); 
    const [ nameEmpty, setNameEmpty ] = useState(false); 

    function cadastrar (e){
        e.preventDefault();
        signup(email, password, name, cpf)
    }

    useEffect(() => {
        if (email !== "") {
            setEmailEmpty(false)
        }
        if (password !== "") {
            setPasswordEmpty(false)
        }
        if (repeatPassword !== "") {
            setRepeatPasswordEmpty(false)
        }
        if (cpf !== "") {
            setEmailEmpty(false)
        }
        if (name !== "") {
            setPasswordEmpty(false)
        }
        if(password === repeatPassword){
            setQualPassword(false)
        }
    }, [email, password,repeatPassword, name, cpf]);

    function cadastrar(e) {
        e.preventDefault();
        if (email !== "" && password !== "" && cpf !== "" && name !== "") {
            signup(email, password, name, cpf)
        }
        if (email === "") {
            setEmailEmpty(true)
        }
        if (password === "") {
            setCpfEmpty(true)
        }
        if (repeatPassword === "") {
            setRepeatPasswordEmpty(true)
        }
        if (cpf === "") {
            setEmailEmpty(true)
        }
        if (name === "") {
            setNameEmpty(true)
        }
        if(password !== repeatPassword){
            setQualPassword(true)
        }
    }

    return (
        <div className="img">
            <div className="opac">
                <div className="formulario">
                    <form>
                        <h2>Cadastrar</h2>
                        <input onChange={(e) => setCpf(e.target.value)} type="text" placeholder="CPF:" />
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome:" />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email:" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha:" />
                        <input onChange={(e) => setRepeatPassword(e.target.value)} type="password" placeholder="Repetir senha:" />
                        <button onClick={cadastrar} type="submit">Cadastrar</button>
                        <div style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center', marginTop: 5 }}>
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
