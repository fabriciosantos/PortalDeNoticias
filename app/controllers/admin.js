module.exports.form_add_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", { erros: {}, noticia: {} });
}

module.exports.salvar = function (application, req, res) {
    var noticia = req.body;

    //Validando o form com express-validation
    req.assert('titulo', 'O titulo è obrigatorio.').notEmpty();
    req.assert('resumo', 'O resumo é obrigatorio.').notEmpty();
    req.assert('resumo', 'O resumo deve conter entre 10 a 100 caracteres.').len(10, 100);
    req.assert('autor', 'O Autor é obrigatorio.').notEmpty();
    req.assert('data_noticia', 'A data é obrigatoria.').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'A noticia é obrigatoria.').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        console.log(erros);
        res.render('admin/form_add_noticia', { erros: erros, noticia: noticia });
        return;
    }

    var connection = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(connection);
    NoticiasDAO.salvar(noticia, function (error, result) {
        res.redirect('/noticias');
    });
}