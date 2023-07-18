
import './App.css';
import SignUp from './registeration/SIgnUp';
import {Route,Routes} from "react-router-dom"
import Login from './login/Login';
import Otp from './otp/Otp';
// import Login from './login/Login';

function App() {
   return(
      <>
      <Routes>
         <Route path={'/'} element={<SignUp/>}/>
         <Route path={'/Login'} element={<Login/>}/>
         <Route path={'/Otp'} element={<Otp/>}/>
      </Routes>
     
      </>
   );
}

export default App;
