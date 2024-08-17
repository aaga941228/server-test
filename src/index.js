const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/login", (req, res) => {
  const token = Date.now().toString();
  res.status(200).json({ token });
});

app.get("/roles", (req, res) => {
  res.status(200).json({ data: [] });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
