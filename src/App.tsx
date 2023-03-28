import { useEffect, useState } from 'react'

import Field from './Field';

function App() {
  const [key, setKey] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    window.setInterval(() => {
      setKey(key => (key + 1));
    }, 10000);
  }, [])

  return (
    <Field key={key} value={value} onChange={setValue} />
  );
}

export default App;
