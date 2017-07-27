var mysql = require('mysql');

var connMySql = function () {
    console.log('Requisição para o Banco de dados realizada com sucesso.');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
};

module.exports = function () {
    console.log('AutoLoad modulo de conexão com banco de dados realizada com sucesso.');
    return connMySql;
}

