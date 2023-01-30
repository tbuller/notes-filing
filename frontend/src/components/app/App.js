import logo from '../../logo.svg';
import Home from '../home/Home'
import './App.css';
import { useNavigate, Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home navigate={useNavigate()} />} />
    </Routes>
  );
}

export default App;
