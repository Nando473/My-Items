import React, { useState } from 'react';

const transacction = () => {
  const [result, setResult] = useState(null);
  
  const handletransacction = async () => {
    
    try {
      const response = await fetch('/api/transacction', { method: 'POST' });
      const data = await response.json();
    } catch (error) {
      console.error(error);

    }
  };

  return (
    <div>
      <button disabled={result !== null} onClick={handletransacction}>
        Transacción 1
      </button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default transacction;

