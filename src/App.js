import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SigninSignup from './components/SigninSignup';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return(
    <div className='app'>
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SigninSignup />} />
          <Route path="/home" element={<Home />} />
         
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
