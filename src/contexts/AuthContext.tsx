import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextData {
  signed: boolean;
  signIn(): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [signed, setSigned] = useState(false);

  function signIn() {
    setSigned(true);
  }

  function signOut() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
