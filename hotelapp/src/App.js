import logo from './logo.svg';
import './App.css';
import SignUP from './components/SignUp';
import Login from './components/login';
import Forgotpassword from './components/forgotPassword';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';


function App() {
  return (
    
    <div className='App'>
          <Routes>
      <Route path="login" element={ <Login/> }/>
      <Route path="/" element={ <SignUP/> }/>
      <Route path="home" element={ <Home/> }/>
      <Route path="forgotPassword" element={ <Forgotpassword/> }/>
    </Routes>
    </div>
    
  );
};

export default App;
