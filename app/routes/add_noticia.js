module.exports = function (application) {
    application.get('/admin', function (req, res) {
        application.app.controllers.admin.form_add_noticia(application, req, res);
    });

    application.post('/add_noticia', function (req, res) {
        application.app.controllers.admin.salvar(application, req, res);
    });
};