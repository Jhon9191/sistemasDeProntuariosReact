import React, { 
useState, 
useEffect, 
createContext 
} from 'react';

export const AuthContext = createContext({});

function AuthProvider  ({ children }) {
    
    const [ user,setUser ] = useState({name: "Joao", id: 1});
    const [ loadingAuth, setLoagingAuth ] = useState(true);
    const [ loading, setLoaging ] = useState(false);

    const [list, setList] = useState([
        { id: 1, nome: "Joao", especialidade: "Adultos" },
        { id: 2, nome: "Jamil", especialidade: "Acidentes de carro" },
        { id: 3, nome: "Alef", especialidade: "Traumas" },
        { id: 4, nome: "nome4", especialidade: "Traumas" },
        { id: 5, nome: "nome5", especialidade: "Traumas" },
        { id: 6, nome: "nome6", especialidade: "Traumas" },
        { id: 7, nome: "nome7", especialidade: "Traumas" },
        { id: 8, nome: "nome8", especialidade: "Traumas" },
    ]);

    const [starPage, setStarPage] = useState(0);
    const [endPage, setEndPage] = useState(3);
    const [page,setPage] = useState(1);

    
    const [list2, setList2] = useState([]);
    
    const nextPage = () => {
        // console.log(`${((list.length/3)+0.33)}`)
        //  if(page < endPage )
            setPage(page+1);
            setStarPage(starPage+3);
            setEndPage(endPage+3);
    }

    const previusPage = () => {
         if(page !== 0)
            setPage(page-1);
            setStarPage(starPage-3);
            setEndPage(endPage-3);
    }

    
    useEffect(()=>{
        setList2([]);
        setList2(list.slice(starPage,endPage))
    },[page])

    return (
        <AuthContext.Provider value={{ 
            signed: !!user,
            user, 
            list,
            list2,
            endPage,
            page,
            nextPage,
            previusPage
            }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;