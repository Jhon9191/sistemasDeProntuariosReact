import React, { useState, useContext, useEffect } from 'react';
import styles from './styles.css';
import { AuthContext } from '../../context/auth';
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'
import { toast } from 'react-toastify'
const Signim = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ showPostModal, setShoePostModal ] = useState(false);
    const { signinPsi } = useContext(AuthContext);
    const [user, setUser] = useState({});

    useEffect(()=>{
        const storageUser = localStorage.getItem("userDate");
        if (storageUser) {
            setUser(JSON.parse(storageUser));
        }
    },[])

    function logar(e) {
        e.preventDefault();
        if (email !== "" && password !== "") {
            signinPsi(email, password)
        }else{
            loadItem()
        }
        if (email === "") {
            toast.warn("Preencha o campo de e-mail!");
        }
        if (password === "") {
            toast.warn("Preencha o campo de senha!");
        }
    }
    console.log(user)

    const loadItem = () =>{
        setShoePostModal(!showPostModal);
    }

    return (
        <div className="img">
            <div className="opac">
                <div className="formulario">
                    <form>
                        <h2>Entrar</h2>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail:" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha:" />
                        <button type="submit" onClick={logar}>Login</button>
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
