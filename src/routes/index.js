import { Switch } from  'react-router-dom';
import Route from './Route'

import SignIn from '../pages/Signim/index.jsx';
import SignUp from '../pages/Signup/index.jsx';
import Dashboard from '../pages/Dashboard/index.jsx';
import Psicologos from '../pages/Psicologos/index.jsx';
import Marcar from '../pages/Appointment/index.jsx';
import Consultas from '../pages/Queries/index.jsx';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/cadastrar" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} isPrivate/>
            <Route exact path="/psicologos" component={Psicologos} isPrivate/>
            <Route exact path="/marcar" component={Marcar} isPrivate/>
            <Route exact path="/Consultas" component={Consultas} isPrivate/>
        </Switch>
    );
}

export default Routes;