import React, { useState, useEffect } from 'react';
import CustomButton from '../components/CustomButton';

const Home: React.FC = () => {
  const [homeData, setHomeData] = useState<any>(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      setHomeData({
      });
    };

    fetchHomeData();
  }, []);

  const handleUpdateHomeData = (newData: any) => {
    setHomeData((prevData: any) => ({
      ...prevData,
      ...newData,
    }));
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Home</h1>
      <CustomButton text="Clique aqui" onClick={handleClick} />
    </div>
  );
};

export default Home;
