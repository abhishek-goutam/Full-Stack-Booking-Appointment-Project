// if(process.env.NODE_ENV === 'production') {
//     module.exports = {
//     }
// }else {
//     module.exports = {
//         mongoURI : 'mongodb://localhost/todo-dev'
//     }
// }

const Sequelize = require("sequelize");

const sequelize = new Sequelize("db_connect", "abhishek", "password", {
  dialect: "mysql",
  host: "localhost",
});


module.exports =sequelize;