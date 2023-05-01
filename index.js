let express = require("express");
let bodyParser = require("body-parser");
let cors = require('cors');
let app = express();
app.use(cors())
const db = require('./model/user.model');
const PORT = 3000;
const apiRoutes = require('./routes/userRoute');

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use('/api',apiRoutes);



db.sequelize.sync({force:false}).then(()=>{
  app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`)
  })
})
