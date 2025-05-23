import React, { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from '../firebase';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-2">
      <h1 className="text-xl font-bold">Sitio Escolar</h1>
      {user ? (
        <div className="flex items-center gap-4">
          <img src={user.photoURL} alt="Usuario" className="w-8 h-8 rounded-full" />
          <span className="text-sm">{user.displayName}</span>
          <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Cerrar sesión
          </button>
        </div>
      ) : (
        <button onClick={handleLogin} className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100">
          Iniciar con Google
        </button>
      )}
    </header>
  );
};

export default Header;
