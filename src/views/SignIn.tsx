import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<any>(null);

  useEffect(() => {
    const fetchCredentials = async () => {
      setCredentials({
      });
    };

    fetchCredentials();
  }, []);

  const handleUpdateCredentials = (newCredentials: any) => {
    setCredentials((prevCredentials: any) => ({
      ...prevCredentials,
      ...newCredentials,
    }));
  };

  const handleSignIn = () => {
    localStorage.setItem('token', 'your-auth-token');
    navigate('/');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <CustomButton text="Entrar" onClick={handleSignIn} />
    </div>
  );
};

export default SignIn;
