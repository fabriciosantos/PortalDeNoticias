function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (response) {
    this._connection.query('select * from noticias', response);
}

NoticiasDAO.prototype.getNoticia = function (response) {
    this._connection.query('select * from noticias where id_noticia = 1 ', response);
}

NoticiasDAO.prototype.salvar = function (noticia, response) {
    this._connection.query('insert into noticias set ? ', noticia, response);
}

module.exports = function () {
  return NoticiasDAO;
};