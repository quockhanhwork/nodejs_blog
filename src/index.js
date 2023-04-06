
const express = require('express'); 
const {engine} = require('express-handlebars')
const path = require("path")
const morgan = require("morgan");
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
app.use(morgan("combined"));

//Template Engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views'))

//route
app.get("/", (req, res) => {
  res.render('home');
});

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
