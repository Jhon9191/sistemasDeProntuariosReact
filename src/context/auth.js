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
    const [loadingAuth, setLoagingAuth] = useState(false);
    const [loading, setLoaging] = useState(false);
    const [list, setList] = useState([]);
    const [starPage, setStarPage] = useState(0);
    const [endPage, setEndPage] = useState(3);
    const [page, setPage] = useState(1);
    const [list2, setList2] = useState([]);
    const [lastDocs, setLastDocs] = useState();
    const [cosultas, setConsultas] = useState([]);
    const [psicologo, setPsicologo] = useState("Selecionar psicologo");
    const [listPacientes, setListPacientes] = useState([]);
    const [uuid, setUuid] = useState(false);
    const [userSelected, setUserSelected] = useState({});

    useEffect(() => {
        const loadStorage = () => {
            const storageUser = localStorage.getItem("userDate");
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setUuid(true)
                setLoagingAuth(true);
            }
        }
        loadStorage();
    }, [])

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
        if(!!user)
        if (user.tipo === "paciente") {
            firebase.firestore().collection("psychologist")
                .get()
                .then((snapshot) => {
                    updateSnapshot(snapshot);
                })
            firebase.firestore().collection("schedules")
                .where("paciente", "==", user.uid).get()
                .then((snapshot) => {
                    updateAgendamentos(snapshot);
                })
        }else{
            firebase.firestore().collection("users")
                .get()
                .then((snapshot) => {
                    updateSnapshot(snapshot);
                })
            firebase.firestore().collection("schedules")
                .where("psicologo", "==", user.uid).get()
                .then((snapshot) => {
                    updateAgendamentos(snapshot);
                })
        }
    }, [uuid]);
    
    useEffect(() => {
        func();
    }, [list, page]);

    const func = () => {
        setList2([]);
        setList2(list.slice(starPage, endPage));
    }

    async function updateSnapshot(snapshot) {
        let isEmpty = snapshot.size === 0;
        let list = [];
        if (!isEmpty) {
            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    cpf: doc.data().cpf,
                    matricula: doc.data().matricula,
                    name: doc.data().name,
                    tipo: doc.data().tipo
                })
            })
        }
        const lastDoc = snapshot.docs[snapshot.docs.length - 1]
        setList(psicologos => [...psicologos, ...list]);
        setLastDocs(lastDoc);
    }

    async function createSchedule(psicologo, time, date, description, name) {
        firebase.firestore().collection("schedules")
            .where("paciente", "==", user.uid).get()
            .then((snapshot) => {
                if (snapshot.size > 0) {
                    toast.error("Já existe uma consulta pendente")
                } else {
                    firebase.firestore().collection('schedules')
                        .doc(user.uid).set({
                            psicologo: psicologo.id,
                            psicologoName: psicologo.name,
                            paciente: name,
                            pacienteName: user.name,
                            time: time,
                            date: date,
                            description: description,
                            status: 'Em andamento'
                        }).then((snapshot) => {
                            toast.success("Sua cosulta foi marcada com sucesso!")
                        })
                    }
                })
    }

   
    //CARREGAR AGENDAMETNOS DE CONSULTAS

    //COMEÇA AQUI A CARREGAR OS PSICOLOGOS DO FIREBASE AQUI ESTA CERTO TEM QUE OLHAR 
    //OS OUTROS COMPONENTES DE PAGINATOR PARA SABER O QUE ESTA ACONTECENDO

    async function updateAgendamentos(snapshot) {
        let isEmpty = snapshot.size === 0;
        let list = [];
        if (!isEmpty) {
            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    psicologo: doc.data().psicologo,
                    paciente: doc.data().paciente,
                    status: doc.data().status,
                    date: doc.data().date,
                    psicologoName: doc.data().psicologoName,
                    pacienteName: doc.data().pacienteName
                })
            })
        }
        setConsultas(cosultas => [...cosultas, ...list]);
    }

    async function PsychologistSignup(email, password, name, cpf, matricula) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.firestore().collection('psychologist')
                    .doc(uid).set({
                        name: name,
                        cpf: cpf,
                        tipo: "psicologo",
                        matricula: matricula
                    })
                    .then(() => {
                        let data = {
                            uid: uid,
                            cpf: cpf,
                            name: name,
                            matricula: matricula,
                            email: value.user.email,
                            tipo: "psicologo"
                        }
                        toast.success("Cadastro realizado com sucesso!");
                        setUser(data)
                        storageUser(data)
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    async function signup(email, password, name, cpf) {
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
                        toast.success("Cadastro realizado com sucesso!")
                        setUser(data)
                        storageUser(data)
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    async function recuperarSenha(email) {
        await firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                toast.success("E-mail enviado com sucesso para redefinir sua senha!")
            })
    }

    const signinPsi = async (email, password) => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                const userProfile = await firebase.firestore().collection('psychologist')
                    .doc(uid).get()
                let data = {
                    uid: uid,
                    cpf: userProfile.data().cpf,
                    name: userProfile.data().name,
                    tipo: userProfile.data().tipo,
                    email: value.user.email,
                }
                toast.success("Logado com sucesso!")
                setUser(data)
                storageUser(data)
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
                toast.success("Logado com sucesso!")
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
            recuperarSenha,
            PsychologistSignup,
            cosultas,
            psicologo,
            setPsicologo,
            createSchedule,
            listPacientes,
            signinPsi,
            setUserSelected,
            userSelected
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;