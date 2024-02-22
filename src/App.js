import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login'
import Productlist from "./pages/Productlist";
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />} />
        <Route path="list-product" element={<Productlist />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
