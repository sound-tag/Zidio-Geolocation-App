
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import './index.css'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
