Proyecto: Refinar Joyas (paquete completo)
-----------------------------------------

Contenido:
- frontend/       : Catálogo React con carrito y formulario
- backend/        : Servidor Node/Express para recibir mensajes del formulario y pago simulado
- public/images/  : Coloca aquí tus fotos reales (actualiza products.json o sampleProducts en Home.jsx)
- README.md       : Este manual

⚙️ Para ejecutar localmente:
1. Backend: 
   cd backend
   npm install
   npm start

2. Frontend:
   cd frontend
   npm install
   npm start

🖌️ Personalización:
- Cambia nombre de la tienda en Navbar.jsx
- Edita productos en Home.jsx (sampleProducts) y añade imágenes en public/images
- Ajusta colores y estilos en inline CSS o usando Tailwind si configuras

☁️ Despliegue en Vercel:
- Sube todo el proyecto a GitHub
- Conecta en Vercel, detectará frontend React automáticamente
- Backend puede ser desplegado como API Functions o proyecto separado
