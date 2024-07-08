import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/Login/LoginForm';
import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom";
import Home from './Components/Login/Home';
import ProtectedRoute from "./utils/ProtectedRoute";
import AdminHome from './Components/Admin/AdminHome';
import AuthorizedRoute from './utils/AuthorizedRoute';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import ViewEmployees from './Components/Admin/ViewEmployees';
import AddEmployee from './Components/Admin/AddEmployee';
import DeleteEmployee from './Components/Admin/DeleteEmployee';
import UpdateEmployee from './Components/Admin/UpdateEmployee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={
          <ProtectedRoute >
          <Home />
          </ProtectedRoute>}/>
          <Route path='/admin' element={
            <ProtectedRoute >
              <AuthorizedRoute>
                <AdminHome />
              </AuthorizedRoute>
            </ProtectedRoute>
          }>
            <Route path="/admin/viewEmployees" element={<ViewEmployees/>} />
            <Route path='/admin/addEmployee' element={<AddEmployee />} />
            <Route path='/admin/updateEmployee' element={<UpdateEmployee/>} />
            <Route path='/admin/deleteEmployee' element={<DeleteEmployee />} />
          </Route>
        <Route path='/' element={<LoginForm />}>
            <Route index element={<Navigate to={"/login"} />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  