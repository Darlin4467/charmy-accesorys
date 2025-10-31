import React from 'react';

export default function Navbar() {
  return (
    <nav style={{padding:'20px', display:'flex', justifyContent:'space-between', backgroundColor:'#f6efe6'}}>
      <h1>Nombre de tu tienda</h1>
      <div>
        <a href="#catalog">Catálogo</a> | 
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  );
}
