const express = require("express");
const loginRoutes = require("./routes/loginRoutes");
const rolesRoutes = require("./routes/rolesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", loginRoutes);
app.use("/", rolesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
