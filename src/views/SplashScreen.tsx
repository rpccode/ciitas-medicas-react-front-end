// src/components/SplashScreen.jsx
import { AppLoader } from '@/components/AppLoader';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = false; // Aquí deberías verificar si el usuario está autenticado
    setTimeout(() => {
      if (isAuthenticated) {
        navigate('/admin/dashboard'); // Redirige al dashboard si está autenticado
      } else {
        navigate('/auth/login'); // Redirige al login si no está autenticado
      }
    }, 8000); // Simula un tiempo de carga
  }, [navigate]);

  return (
    <>
    <div className="flex items-center justify-center h-screen bg-blue-900">
      <AppLoader />
    </div>
    </>
  );
};

export default SplashScreen;
