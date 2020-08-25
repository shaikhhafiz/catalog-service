const express = require('express');
const Router = require('./core/router');

const app = express();
var router = express.Router();
var cors = require('cors')
const PORT = 8082;

app.use(cors())

app.use(express.json())


// router.use(function (req, res, next) {
//   console.log(res);
//   next();
// })

// app.use(router);

// app.use(ResponseFormatter)

//Use all middle before this line. Middle ware aren't working below this line
Router.routeConfig(app);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});