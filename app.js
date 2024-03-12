const express = require('express')
const app = express();
port = 2024;


const dbconnection = require("./database/dbConfig.js");

// json middleware to extract json data
app.use(express.json())

// user routes middleware file
const userRoutes = require("./routes/userRoute.js");
app.use('/api/users', userRoutes)

// question routes middleware file

// answer routes middleware file

app.get ('/', function (req, res) {
  res.send('Hello from the ...')
}
)
async function starter() {
  try {
    const result = await dbconnection.execute("select 'test' ");
    app.listen(port);
    console.log("database connected");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
starter();

