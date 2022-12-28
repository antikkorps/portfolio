import axios from 'axios';
import { useEffect, useState } from 'react';

const getJokesData = async () => {
  const res = await axios.get('https://v2.jokeapi.dev/joke/Programming');
  return res.data;
};

const Jokes = () => {
  const [jokesData, setJokesData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getJokesData();
      setJokesData(data);
    };
    fetchData();
  }, []);

  return (
    <div className='card text-bg-dark mb-3'>
      <div className='card-header'>Using Axios</div>
      <div className='card-body'>
        <h5 className='card-title'>Random Joke</h5>
        <p className='card-text'>
          {jokesData.joke
            ? jokesData.joke
            : `Parfois la requête échoue... et malheureusement, c'est le cas ici...`}
        </p>
      </div>
    </div>
  );
};

export default Jokes;
