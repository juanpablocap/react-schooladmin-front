
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Alumnos from './pages/Alumnos';
import Login from './pages/Login';
import Register from './pages/Register';
import ModalProvider from './context/ModalContext';
import UserProvider from './context/UserContext';
import ModalNotas from './components/Modals/ModalNotas';
import Profesores from './pages/Profesores';
import ProfileCard from './components/ProfileCard/ProfileCard';
import MateriasCards from './components/Cards/MateriasCards';
import LoginForm from './components/LoginForm/LoginForm.css';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';


function App() {
  return (
    <Router>
      <ModalProvider>
      <UserProvider>
      
      <Routes>
       
        
<<<<<<< HEAD
         <Route path="/home" element={<Dashboard children={<ProfileCard/>} />}/>
         <Route path="/profesores" element={<Dashboard children={<Profesores/>} />} />  
         <Route path="/alumnos" element={<Dashboard children={<Alumnos/>} />} />
         <Route path="/" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/notas" element={<Dashboard children={<Profesores/>} />} />
         <Route path="/materias" element={<Dashboard children={<MateriasCards/>} />} />
=======
         <Route path="/" element={<PrivateRoute><Dashboard children={<ProfileCard/>} /></PrivateRoute>}/>
         <Route path="/profesores" element={<PrivateRoute><Dashboard children={<Profesores/>} /></PrivateRoute>} />  
         <Route path="/alumnos" element={<PrivateRoute><Dashboard children={<Alumnos/>} /></PrivateRoute>} />  
         <Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />
         <Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />
         <Route path="/notas" element={<PrivateRoute><Dashboard children={<Profesores/>} /></PrivateRoute>} />  
         <Route path="/materias" element={<PrivateRoute><Dashboard children={<MateriasCards/>} /></PrivateRoute>} />  
>>>>>>> 3d946757444f947920bd73231c80514e3630163f
         
       
      </Routes>
      </UserProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;