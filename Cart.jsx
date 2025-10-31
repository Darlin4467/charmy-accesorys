import React, { useState } from 'react';

export default function Cart({cart}) {
  const [message, setMessage] = useState('');
  const handleCheckout = () => {
    setMessage('Pago simulado exitoso 🛍️');
  }
  return (
    <div>
      <h2>Carrito</h2>
      <ul>{cart.map(c=><li key={c.id}>{c.title} x {c.qty}</li>)}</ul>
      <button onClick={handleCheckout}>Finalizar Compra</button>
      <p>{message}</p>
    </div>
  );
}
