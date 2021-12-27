import { BrowserRouter } from 'react-router-dom';
import './global.css'
import Routes from './routes';
import AuthProvider from './context/auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <ToastContainer autoClose={6500} />
                    <Routes />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;