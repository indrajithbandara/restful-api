// app/routes.js
module.exports = function(app, router) {

    //all routes will use /api
    app.use('/api', router);

    router.get('/', function(req, res){
        res.json({payload: "hello world!!"});
    });
};
