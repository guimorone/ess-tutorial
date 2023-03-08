require('dotenv').config();
const app = require('./app');
console.log(process.env)

let port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
