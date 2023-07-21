const express = require('express');
const app = express();
const path = require ('path');
const PORT = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'views', '404.html')));

app.listen(PORT, () => console.log("server running in http://localhost:"+ PORT));
/*npm start ejecuta el servidor*/ 
