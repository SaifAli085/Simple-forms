import './App.css';
import Home from './Compontents/Home/Home'
import Login from './Compontents/Login/Login'
import Signup from './Compontents/Signup/Signup'
import {
  BrowserRouter as Main,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={< Login />}/>
        <Route path='/signup' element={<Signup/>}/>
      

      </Routes>

      </Main>
      
     
    </div>
  );
}

export default App;
