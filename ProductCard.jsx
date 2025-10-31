import React from 'react';

export default function ProductCard({product, addToCart}) {
  return (
    <div style={{border:'1px solid #ccc', borderRadius:'12px', padding:'12px'}}>
      <img src={product.image} alt={product.title} style={{width:'100%', borderRadius:'8px'}} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={()=>addToCart(product.id)}>Añadir al carrito</button>
    </div>
  );
}
