import { useState, useEffect } from 'react';
import api from './services/api';

export default function App() {
  let a = 0;
  const [aState, setAState] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    api
      .get('/restaurant', { params: { testeee: 'oi' } })
      .then(data => console.log(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [aState]);

  return (
    <div>
      <h1>{aState}</h1>
      <button onClick={() => setAState(prev => prev + 1)}>Clica em mim</button>
    </div>
  );
}
