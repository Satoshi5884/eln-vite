import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Layout from './components/Layout';
    import Home from './pages/Home';
    import Register from './pages/Register';
    import Login from './pages/Login';
    import Logout from './pages/Logout';
    import Pricing1 from './pages/Pricing1';
    import Pricing2 from './pages/Pricing2';
    import Pricing3 from './pages/Pricing3';

    export default function App() {
      return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="pricing1" element={<Pricing1 />} />
            <Route path="pricing2" element={<Pricing2 />} />
            <Route path="pricing3" element={<Pricing3 />} />
          </Route>
        </Routes>
      );
    }
