import React, { useState } from "react";
import transacction from "../../pages/transacction"; // en esta line a esta importanto las transaciones
import transacction2 from "../../pages/transaccion2"; // en esta line a esta importanto las transaciones


const Operaciones = () => {
  // const [result, setResult] = useState();
  
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch("/api/search-products");

      if (response.ok) {
        const data = await response.json();

        setProducts(data.products);
      } else {
        console.error("Error al buscar productos");
      }
    } catch (error) {
      console.error(`Error en la solicitud: ${error}`);
    }
  };

  return (
    <div>
      <button onClick={handleSearch}className="bg-dark text-light p-4 rounded-lg">Productos</button>
      <br></br><br></br>
      <div>
        {/* Resultado de productos: <span>{products}</span> */}
        {products && products.length > 0 &&(
          <table >
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id_product}>
                  <td>{product.id_product}</td>
                  <td>{product.nom_product}</td>
                  <td>{product.desc_product}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      <br></br>
      <transacction /> {/* Agrega la transacción 1 */}
      <br></br>
      <transacction2 /> {/* Agrega la transacción 2 */}
      </div>
      <br></br>
      
    </div>
  );
};

export default Operaciones;
