import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import CartButton from '../components/CartButton/CartButton';
import productsRequest from '../services/requests/productsRequest';
import CardProduct from '../components/CardProduct/CardProduct';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productsRequest.getAll()
      .then(({ body }) => setProducts(body));
  }, []);

  return (
    <div className="container_page">
      <NavBar selected="products" haveProducts orders="Meus Pedidos" />
      {/* <h1>PRODUTOS PAGE</h1> */}
      <div className="container_products">
        {products.map((product) => (
          <CardProduct
            key={ product.id }
            id={ product.id }
            productName={ product.name }
            url={ product.urlImage }
            price={ product.price }
          />
        ))}
      </div>
      <CartButton />
    </div>
  );
}

export default CustomerProducts;
