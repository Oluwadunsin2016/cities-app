




import React, { createContext, useContext, useState, useEffect } from 'react';
import { useGetProfile } from '../apis/auth';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

      const { 
        data: userData, 
        isLoading,
        refetch: refetchProfile 
      } = useGetProfile();

  // Update state when profile data changes
  useEffect(() => {
    console.log('User data fetched:', userData);
    if (userData) {
      if (userData.role == 'creator') {
        setUser(userData.creator);
      }else if (userData.role == 'brand') {
        setUser(userData.brand);
      }
    }
  }, [userData]);


  const logout = () => {
    localStorage.removeItem('gigastarToken');
    setUser(null);
    navigate('/');
  };

  const value = {
    user,
    logout,
    refetchProfile,
    isAuthenticated: !!user,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};