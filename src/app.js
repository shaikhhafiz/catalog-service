const express = require('express');
const Router = require('./core/router');
const validateToken = require('./core/middleware/validate-token');
const handleError = require('./core/middleware/error-handler');

const app = express();
var router = express.Router();
var cors = require('cors')
const PORT = 8082;

app.use(cors())

app.use(express.json())

app.use(validateToken);

app.use(handleError);

//Use all middle before this line. Middle ware aren't working below this line
Router.routeConfig(app);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
