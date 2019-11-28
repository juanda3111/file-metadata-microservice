//imports de JS
var express =require('express');
var bodyParser= require('body-parser');
var cors = require('cors');
var multer = require('multer');

var upload = multer({dest:'upload/'});

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));


app.post('/upload', upload.single('upfile'), function(req, res, next){

    return res.json(req.file);
});


//a ver si me deja subirlo a heroku
var puerto = process.env.PORT || 5000;

app.listen(puerto, function() {
    console.log("funciona");
})