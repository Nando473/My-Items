import React, { useState } from 'react';

const transacction2 = () => {
  const [result, setResult] = useState(null);

  const handletransacction2 = async () => {
    try {
      const response = await fetch('/api/transacction2', { method: 'POST' });
      const data2 = await response.json();
      setResult(data2.message);
    } catch (error) {
      console.error(error);
      setResult('ok 2');
    }
  };

  return (
    <div>
      <button disabled={result !== null} onClick={handletransacction2}>
      Transacction 2
      </button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default transacction2;
