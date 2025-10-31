import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", (req,res)=>{
  console.log("Mensaje recibido:", req.body);
  res.status(200).json({success:true,msg:"Mensaje recibido correctamente (simulación)"});
});

app.post("/api/checkout", (req,res)=>{
  console.log("Carrito:", req.body);
  res.status(200).json({success:true,msg:"Pago simulado exitoso 🛍️"});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log(`Servidor backend en puerto ${PORT}`));
