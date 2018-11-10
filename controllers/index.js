module.exports.controller = (app) => {
    //get Homepage
    app.get('/', (req, res) => {
        res.render('index', { title: 'Express' });
    })
}