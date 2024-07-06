import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/Login/LoginForm';
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './Components/Login/Home';
import ProtectedRoute from "./utils/ProtectedRoute";
import AdminHome from './Components/Admin/AdminHome';
import AuthorizedRoute from './utils/AuthorizedRoute';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={
          <ProtectedRoute >
          <Home />
          </ProtectedRoute>}/>
          <Route path='/admin' element={
            <ProtectedRoute >
              <AuthorizedRoute>
                <AdminHome />
              </AuthorizedRoute>
            </ProtectedRoute>
          }/>
        <Route path='/' element={<LoginForm />}>
            <Route index path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  