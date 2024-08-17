const express = require("express");
const tokensRoutes = require("./routes/tokensRoutes");
const rolesRoutes = require("./routes/rolesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", tokensRoutes);
app.use("/", rolesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
