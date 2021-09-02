import React, { useState, useContext, useEffect } from 'react';
import styles from './styles.css';
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth';
const PsychologistSignup = () => {

    const { PsychologistSignup } = useContext(AuthContext);
    const [matricula, setMatricula] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [repeatPasswordEmpty, setRepeatPasswordEmpty] = useState(false);
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [passwordEmpty, setPasswordEmpty] = useState(false);
    const [cpf, setCpf] = useState("");
    const [equalPassword, setEqualPassword] = useState(false);
    const [cpfEmpty, setCpfEmpty] = useState(false);
    const [matriculaEmpty, setMatriculaEmpty] = useState(false);
    const [nameEmpty, setNameEmpty] = useState(false);

    useEffect(() => {
        if (cpf !== "") {
            setCpfEmpty(false);
        }
        if (matricula !== "") {
            setMatriculaEmpty(false);
        }
        if (name !== "") {
            setNameEmpty(false);
        }
        if (email !== "") {
            setEmailEmpty(false);
        }
        if (password !== "") {
            setPasswordEmpty(false);
        }
        if (repeatPassword !== "") {
            setEqualPassword(false);
        }
        if ((password == repeatPassword) && (passwordEmpty == false)  && (equalPassword == false)) {
            setRepeatPasswordEmpty(false)
        }
    }, [email, password, repeatPassword, name, cpf]);

    function cadastrar(e) {
        e.preventDefault();
        if (email !== "" && password !== "" && cpf !== "" && name !== "") {
              PsychologistSignup(email, password, name, cpf, matricula);
        }
        if (cpf === "") {
            toast.warn("Preencha o campo de CPF!");
        }
        if (matricula === "") {
            toast.warn("Preencha o campo de matrícula!");
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
        if ((password !== repeatPassword) && (passwordEmpty == false)  && (equalPassword == false)) {
            //setRepeatPasswordEmpty(true)
        }
    }

    return (
        <div className="img">
            <div className="opac">
                <div className="formulario">
                    <form>
                        <h2>Cadastrar</h2>
                        <input onChange={(e) => setCpf(e.target.value)} type="text" placeholder="CPF:" />
                        <input onChange={(e) => setMatricula(e.target.value)} type="text" placeholder="Matricula:" />
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome:" />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email:" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha:" />
                        <input onChange={(e) => setRepeatPassword(e.target.value)} type="password" placeholder="Repetir senha:" />
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

export default PsychologistSignup;
