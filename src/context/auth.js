import React, {
    useState,
    useEffect,
    createContext
} from 'react';
import firebase from "../services/firebase"
import { toast } from 'react-toastify'
export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [user, setUser] = useState();
    const [loadingAuth, setLoagingAuth] = useState(true);
    const [loading, setLoaging] = useState(false);
    const [list, setList] = useState([]);
    const [starPage, setStarPage] = useState(0);
    const [endPage, setEndPage] = useState(3);
    const [page, setPage] = useState(1);
    const [list2, setList2] = useState([]);

    const nextPage = () => {
        setPage(page + 1);
        setStarPage(starPage + 3);
        setEndPage(endPage + 3);
    }

    const previusPage = () => {
        if (page !== 0)
            setPage(page - 1);
        setStarPage(starPage - 3);
        setEndPage(endPage - 3);
    }

    useEffect(() => {
        const loadStorage = () => {
            const storageUser = localStorage.getItem("userDate");
            if (storageUser) {
                setUser(JSON.parse(storageUser));
            }
        }
        loadStorage();
    }, [])

    useEffect(() => {
        setList2([]);
        setList2(list.slice(starPage, endPage))
    }, [page]);

    async function signup(email, password, name, cpf) {
        console.log(email, password, name)
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.firestore().collection('users')
                    .doc(uid).set({
                        name: name,
                        cpf: cpf,
                        tipo: "paciente"
                    })
                    .then(() => {
                        let data = {
                            uid: uid,
                            cpf: cpf,
                            name: name,
                            email: value.user.email,
                            tipo: "paciente"
                        }
                        setUser(data)
                        storageUser(data)
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    async function recuperarSenha(email){
        await firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            toast.success("E-mail enviado com sucesso para redefinir sua senha!")
        })
    }

    const signin = async (email, password) => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                const userProfile = await firebase.firestore().collection('users')
                    .doc(uid).get()
                let data = {
                    uid: uid,
                    cpf: userProfile.data().cpf,
                    name: userProfile.data().name,
                    tipo: userProfile.data().tipo,
                    email: value.user.email,
                }
                setUser(data)
                storageUser(data)
            })
    }

    function storageUser(data) {
        localStorage.setItem("userDate", JSON.stringify(data));
    }

    async function logoutUser() {
        await firebase.auth().signOut();
        localStorage.removeItem('userDate');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            list,
            list2,
            endPage,
            page,
            nextPage,
            previusPage,
            signup,
            logoutUser,
            signin,
            setUser,
            storageUser,
            recuperarSenha
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;