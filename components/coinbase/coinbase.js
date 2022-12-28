import axios from 'axios';
import { useEffect, useState } from 'react';

const getCoinbaseData = async () => {
  const res = await axios.get(
    'https://api.coinbase.com/v2/prices/BTC-EUR/spot'
  );
  return res.data;
};

const Coinbase = () => {
  const [coinbaseData, setCoinbaseData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoinbaseData();
      setCoinbaseData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='card text-bg-dark mb-3'>
        <div className='card-header'>Using Axios</div>
        <div className='card-body'>
          <h5 className='card-title'>Taux de change du Bitcoin</h5>
          <p className='card-text'>
            Actuellement le bitcoin s&#39;échange à{' '}
            {coinbaseData.data ? coinbaseData.data.amount : 'Loading...'} Euros
          </p>
        </div>
      </div>
    </>
  );
};

export default Coinbase;
