const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "evangadi for",
  database: "evangadiforum",
  host: "localhost",
  password: "Wmybke@2127",
  connectionLimit: 10,
});

// dbConnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

module.exports=dbConnection.promise()