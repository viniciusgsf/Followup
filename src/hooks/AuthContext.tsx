import { createContext, useCallback, useContext, useState } from "react";
import api from '../services/apiClient';

interface User {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
  }

interface signInCredentials {
    email: string;
    password: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface AuthContextData {
    user: User;
    signIn(credentials: signInCredentials): Promise<void>; 
    signOut(): void;
    updateUser(user: User): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Followup:token');
        const user = localStorage.getItem('@Followup:user');

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            return { token, user: JSON.parse(user)};
        }

        return {} as AuthState;
    });

    const signIn = useCallback( async ({ email, password }) => {
        const response = await api.post('/sessions', {
            email,
            password,
        });

        const { token, user } = response.data;
        localStorage.setItem('@Followup:token', token);
        localStorage.setItem('@Followup:user', JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user});
        console.log(response.data);
    },[]);

    const signOut = useCallback(() => {
        localStorage.removeItem('@Followup:token');
        localStorage.removeItem('@Followup:user');

        setData({} as AuthState);
    }, []);

    const updateUser = useCallback((user: User) => {
        localStorage.setItem('@GoBarber:user', JSON.stringify(user));
  
        setData({
          token: data.token,
          user,
        })
      }, [setData, data.token]);
  
      return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut, updateUser }}>
          {children}
        </AuthContext.Provider>
      );

    

};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used iwthin an AuthProvider')
    }

    return context;
}
