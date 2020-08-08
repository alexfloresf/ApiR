const express = require('express');
const app = express();

//seteo de Iniciación
app.set('port', process.env.PORT || 4000);

//definición de Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//definición de Routes
app.use(require('./routes/route'));

//app.listen(4000);
//console.log("Servidor en puerto 4000");
// Starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});