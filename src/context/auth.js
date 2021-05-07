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

    return (
        <AuthContext.Provider value={{ 
            signed: !!user,
            user, 
            }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;