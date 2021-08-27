import React, { useState, useContext, useEffect } from 'react';
import styles from './styles.css';
import { AuthContext } from '../../context/auth';
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'

const Signim = () => {

    const [email, setEmail] = useState("")
    const [emailEmpty, setEmailEmpty] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordEmpty, setPasswordEmpty] = useState(false)
    const [ showPostModal, setShoePostModal ] = useState(false);
    const { signin, user } = useContext(AuthContext)

    useEffect(() => {
        if (email !== "") {
            setEmailEmpty(false)
        }
        if (password !== "") {
            setPasswordEmpty(false)
        }
    }, [email, password]);

    function logar(e) {
        e.preventDefault();
        if (email !== "" && password !== "") {
            signin(email, password)
        }else{
            loadItem()
        }
        if (email === "") {
            setEmailEmpty(true)
        }
        if (password === "") {
            setPasswordEmpty(true)
        }
    }

    const loadItem = () =>{
        setShoePostModal(!showPostModal);
    }

    return (
        <div className="img">
            <div className="opac">
                <div className="formulario">
                    {/* <h1>Olá</h1> */}
                    <form>
                        <h2>Entrar</h2>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail:" />
                        {emailEmpty && <h1 className="nemptyNotification">*Preencha o campo com seu e-mail!</h1>}
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha:" />
                        {passwordEmpty && <h1 className="nemptyNotification">*Preencha o campo com sua senha!</h1>}
                        <button type="submit" onClick={logar}>Login</button>
                        <Link id="linkto" to="/recover">Esqueci minha senha</Link>
                        <div style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                            <input className="check" type="checkbox" defaultChecked={() => { }} onChange={() => { }} />
                            <spam id="spamCheck" >Mantenha-me conectado</spam>
                        </div>

                    </form>
                    <Link id="linkto" to="/cadastrar">Criar uma nova conta</Link>
                </div>
            </div>
            {showPostModal && (
                <Modal
                    emote="😬"
                    title="Ops!"
                    subtitle="Não foi possivel conectar"
                    close={loadItem}
                />
            )}
        </div>


    );
}

export default Signim;
