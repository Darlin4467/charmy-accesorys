import React, { useState } from 'react';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name:e.target.name.value, email:e.target.email.value, message:e.target.message.value };
    await fetch('http://localhost:4000/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
    setMessage('Mensaje enviado correctamente (simulación)');
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" required />
      <input name="email" type="email" placeholder="Correo" required />
      <textarea name="message" placeholder="Mensaje" required />
      <button type="submit">Enviar</button>
      <p>{message}</p>
    </form>
  );
}
