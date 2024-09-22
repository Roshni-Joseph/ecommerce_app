import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return(
    <div className='app'>
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />} />
         
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
