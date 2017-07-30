var http = require('http');
var server = http.createServer(function(req, res) {
    console.log('Server started port 3000');
    res.end("<html><body>Portal de Noticias</body></html>");
});

server.listen(3000);