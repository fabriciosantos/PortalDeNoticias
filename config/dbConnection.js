var mysql = require('mysql');

var connMySql = function () {
    console.log('Requisição para o Banco de dados realizada com sucesso.');
    return mysql.createConnection({
        host: 'localhost',
        user: 'b054ae80c3042a',
        password: '7f8b5755',
        database: 'heroku_5caa249a6021fe8'
    });
};

module.exports = function () {
    console.log('AutoLoad modulo de conexão com banco de dados realizada com sucesso.');
    return connMySql;
}

