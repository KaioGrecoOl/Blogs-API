const express = require('express');
const routeLogin = require('./routes/loginRoute');
const routeUser = require('./routes/userRoute');
const routeCategorie = require('./routes/categories');

// ...

const app = express();

app.use(express.json());

// ...
app.use(routeLogin);
app.use(routeUser);
app.use(routeCategorie);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
