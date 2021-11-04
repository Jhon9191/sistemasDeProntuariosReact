import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth';
const Signup = () => {

    const { signup } = useContext(AuthContext)

    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [repeatPasswordEmpty] = useState(false);
    const [emailEmpty] = useState(false);
    const [passwordEmpty] = useState(false);
    const [equalPassword] = useState(false);
    const [cpfEmpty] = useState(false);
    const [nameEmpty] = useState(false);

    function cadastrar(e) {
        e.preventDefault();
        if (email !== "" && password !== "" && cpf !== "" && name !== "") {
            signup(email, password, name, cpf)
        }
        if (cpf === "") {
            toast.warn("Preencha o campo de CPF!");
        }
        if (name === "") {
            toast.warn("Preencha o campo de nome!");
        }
        if (email === "") {
            toast.warn("Preencha o campo de e-mail!");
        }
        if (password === "") {
            toast.warn("Preencha o campo de senha!");
        }
        if (repeatPassword === "") {
            toast.warn("Preencha o campo de repetir senha!");
        }
    }

    return (
        <div className="img">
            <div className="opac">
                <div className="formulario">
                    <form>
                        <h2>Cadastrar</h2>
                        <input onChange={(e) => setCpf(e.target.value)} type="text" placeholder="CPF:" />
                        {cpfEmpty && <h1 className="nemptyNotification">*Preencha o campo com seu CPF!</h1>}
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome:" />
                        {nameEmpty && <h1 className="nemptyNotification">*Preencha o campo com seu nome!</h1>}
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email:" />
                        {emailEmpty && <h1 className="nemptyNotification">*Preencha o campo com seu  e-mail!</h1>}
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha:" />
                        {passwordEmpty && <h1 className="nemptyNotification">*Preencha o campo com sua senha</h1>}
                        {repeatPasswordEmpty && <h1 className="nemptyNotification">*As senhas não se conhecidem</h1>}
                        <input onChange={(e) => setRepeatPassword(e.target.value)} type="password" placeholder="Repetir senha:" />
                        {equalPassword && <h1 className="nemptyNotification">*Preencha o campo com sua senha novamente</h1>}
                        {repeatPasswordEmpty && <h1 className="nemptyNotification">*As senhas não se conhecidem</h1>}
                        <button onClick={cadastrar} type="submit">Cadastrar</button>
                        <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
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
