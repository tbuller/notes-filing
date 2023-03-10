import logo from '../../logo.svg';
import Home from '../home/Home'
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignupForm';
import MyHomeForm from '../myhome/MyHome'
import NewFolderForm from '../folder/NewFolderForm'
import File from '../folder/File'
import './App.css';
import { useNavigate, Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home navigate={useNavigate()} />} />
      <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
      <Route path="/signup" element={<SignUpForm navigate={useNavigate()} />} />
      <Route path="/myhome" element={<MyHomeForm navigate={useNavigate()} />} />
      <Route path="/newfile" element={<NewFolderForm navigate={useNavigate()} />} />
      <Route path="/folder" element={<File navigate={useNavigate()} />} />
    </Routes>
  );
}

export default App;
