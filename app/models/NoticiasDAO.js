function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (response) {
    this._connection.query('select * from noticias order by data_criacao desc', response);
}

NoticiasDAO.prototype.getNoticia = function (query, response) {
    console.log(query);
    this._connection.query('select * from noticias where id_noticia = '+ query.id_noticia, response);
}

NoticiasDAO.prototype.salvar = function (noticia, response) {
    this._connection.query('insert into noticias set ? ', noticia, response);
}

NoticiasDAO.prototype.getUltimasNoticias = function (reponse) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', reponse);
}

module.exports = function () {
  return NoticiasDAO;
};