import logo from './logo.svg';
import './App.css';
import SignUP from './components/SignUp';
import Login from './components/login';
import Forgotpassword from './components/forgotPassword';
import { Routes, Route,Link } from 'react-router-dom';
import Home from './components/home';
import Booking from "./components/Booking"
import Garden from './components/garden';
import Admin from './components/Admin';
import ProfilePage from './components/ProfilePage';
import { AuthProvider } from './components/AuthContext';


function App() {
  return (
    <AuthProvider>
      <div className='App'>
          <Routes>
      <Route path="login" element={ <Login/> }/>
      <Route path="/" element={ <SignUP/> }/>
      <Route path="home" element={ <Home/> }/>
      <Route path="Booking" element={ <Booking/> }/>
      <Route path="forgotPassword" element={ <Forgotpassword/> }/>
      <Route path="garden" element={<Garden/>}/>
      <Route path="Admin" element={<Admin/>}/>
      <Route path="ProfilePage" element={<ProfilePage/>}/>
    </Routes>
    </div>
    </AuthProvider>
    
    
  );
};

export default App;
