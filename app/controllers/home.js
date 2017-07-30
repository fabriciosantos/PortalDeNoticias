module.exports.index = function (application, req, res) {
    var connection = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

    NoticiasDAO.getUltimasNoticias(function (error, response) {
        console.log(response);
        res.render("home/index", {noticias : response});
    });
}