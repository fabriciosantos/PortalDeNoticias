var app = require('./config/server');
var routaNoticias = require('./app/routes/noticias')(app);
var routaAddNoticia = require('./app/routes/form_add_noticia')(app);
var routaHome = require('./app/routes/home')(app);

app.listen(3000, function(){
    console.log('Server started port 3000');
});
