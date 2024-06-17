import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({
  usuario: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const loadUsuario = async () => {
      const usuarioStorage = await AsyncStorage.getItem('usuario');
      if (usuarioStorage) {
        setUsuario(JSON.parse(usuarioStorage));
      }
    };
    loadUsuario();
  }, []);

  const login = async (usuarioData) => {
    setUsuario(usuarioData);
    await AsyncStorage.setItem('usuario', JSON.stringify(usuarioData));
  };

  const logout = async () => {
    setUsuario(null);
    await AsyncStorage.removeItem('usuario');
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
