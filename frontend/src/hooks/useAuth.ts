import { useAuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { isAuthenticated } = useAuthContext();
  return { isAuthenticated };
};
