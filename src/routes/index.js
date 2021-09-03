import { Switch } from  'react-router-dom';
import Route from './Route'

import SignIn from '../pages/Signim';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import PsychologistDashboard from '../pages/PsychologistDashboard';
import PsicologoCadastro from '../pages/PsychologistSignup';
import Psicologos from '../pages/Psicologos';
import Marcar from '../pages/Appointment';
import Profile from '../pages/Profile';
import Consultas from '../pages/Queries';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/cadastrar" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} isPrivate/>
            <Route exact path="/psicologos" component={Psicologos} isPrivate/>
            <Route exact path="/marcar" component={Marcar} isPrivate/>
            <Route exact path="/Profile" component={Profile} isPrivate/>
            <Route exact path="/consultas" component={Consultas} isPrivate/>
            <Route exact path="/psicologo/cadastrar" component={PsicologoCadastro} />
            <Route exact path="/dashboard/psicologo" component={PsychologistDashboard} isPrivate/>
        </Switch>
    );
}

export default Routes;