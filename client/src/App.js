import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Home from "./booking/Home"
import Nav from "./components/Nav"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from "./components/PrivateRoute"
import Dashboard from "./user/Dashboard"
import DashBoardSeller from "./user/DashBoardSeller"




const  App = () =>  {
  return (
    <Router>
       <Nav/>
      <ToastContainer/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <PrivateRoute exact path="/dashboard/seller" component={DashBoardSeller}/>
        </Switch>
    </Router>
  );
}

export default App;
