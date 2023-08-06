import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Create from './views/Create/Create';
import Details from './views/Details/Details';
import { useLocation } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const location=useLocation();
  return (
    
    <div>

        {location.pathname!=="/"?<Navbar/>:null}
        <Switch>
          
          <Route exact path={"/"} component={Landing}/>
          <Route path={"/home"} component={Home} />
          <Route path={"/create"} component={Create}/>
          <Route path={"/details"} component={Details}/>

        </Switch>
      
      
    </div>
  );
}

export default App;
