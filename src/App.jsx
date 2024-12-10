import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavbarUser';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import EvaluarCreditos from './components/EvaluarCreditos';
import SolicitarCredito from './components/SolicitarCredito';
import PaycheckList from './components/PaycheckList';
import LoginSimulator from './components/LoginSimulator'
import AnualReport from './components/AnualReport';
import ExtraHoursList from './components/ExtraHoursList';
import AddEditExtraHours from './components/AddEditExtraHours';

function AppContent() {
  const location = useLocation();

  // Rutas donde el Navbar no debe mostrarse
  const routesWithoutNavbar = ['/', '/home', '/login', '/loginAdmin', '/register', '/loginSimulator'];
  const showNavbar = !routesWithoutNavbar.includes(location.pathname);

  return (
    <div style={{ textAlign: 'center' }}>
      {showNavbar && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginAdmin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employee/list" element={<EvaluarCreditos />} />
          <Route path="/solicitarCredito" element={<SolicitarCredito />} />
          <Route path="/evaluarCreditos" element={<PaycheckList />} />
          <Route path="/loginSimulator" element={<LoginSimulator />} />
          <Route path="/reports/AnualReport" element={<AnualReport />} />
          <Route path="/extraHours/list" element={<ExtraHoursList />} />
          <Route path="/extraHours/add" element={<AddEditExtraHours />} />
          <Route path="/extraHours/edit/:id" element={<AddEditExtraHours />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
