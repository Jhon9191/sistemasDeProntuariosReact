import React, {
    useState,
    useEffect,
    createContext
} from 'react';
import firebase from "../services/firebase"

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
                        cpf: cpf
                    })
                    .then(() => {
                        let data = {
                            uid: uid,
                            cpf: cpf,
                            name: name,
                            email: value.user.email,
                        }
                        setUser(data)
                        storageUser(data)
                    })
            })
            .catch((error) => {
                console.log(error)
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
            signin
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;