import logo from '../../logo.svg';
import Home from '../home/Home'
import LoginForm from '../auth/LoginForm'
import './App.css';
import { useNavigate, Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home navigate={useNavigate()} />} />
      <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
    </Routes>
  );
}

export default App;
