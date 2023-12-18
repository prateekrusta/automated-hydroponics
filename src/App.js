import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardHome from './components/dashboard/dashboard-home';
import DashboardProfile from './components/dashboard/dashboard.profile';
import DashboardCamera from './components/dashboard/dashboard-camera';
import DashboardGraph from './components/dashboard/dashboard-graphs';
import AuthLogin from './components/auth/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<AuthLogin />} />
            <Route path="/home" element={<DashboardHome />} />
            <Route path="/profile" element={<DashboardProfile />} />
            <Route path="/camera" element={<DashboardCamera />} />
            <Route path="/graphs" element={<DashboardGraph />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
