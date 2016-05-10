module.exports = function (app) {
    var express = require('express');
    var keywordsRouter = express.Router();

    // Use the body-parser library in this service
    var bodyParser = require('body-parser');
    keywordsRouter.use(bodyParser.json());

    var keywordsDB = app.keywordsDB;

    keywordsRouter.get('/', function (req, res) {
        delete req.query["_"];
        keywordsDB.find(req.query).exec(function (error, keywords) {
            res.send({
                'status': 'ok',
                'data': keywords
            })
        })
    });

    keywordsRouter.post('/', function (req, res) {
        // Look for the most recently created record
        keywordsDB.find({}).sort({id: -1}).limit(1).exec(function (err, keywords) {

            if (keywords.length != 0)
                req.body.keyword.id = keywords[0].id + 1;
            else
                req.body.keyword.id = 1;

            // Insert the new record
            keywordsDB.insert(req.body.keyword, function (err, newkeyword) {
                res.status(201);
                res.send({'status': 'ok', 'data': [newkeyword]});
            })
        });
    });

    keywordsRouter.get('/:id', function (req, res) {
        keywordsDB.find({id: req.params.id}).exec(function (error, keywords) {
            if (keywords.length > 0)
                res.send({
                    'status': 'ok',
                    'data': keywords
                });
            else {
                res.status(404);
                res.send({
                    'status': 'missing',
                    'data': null
                });
            }
        });
    });

    keywordsRouter.put('/:id', function (req, res) {
        var keyword = req.body.keyword;

        keywordsDB.update({id: req.params.id}, keyword, {}, function (err, count) {
            res.send({'status': 'ok', 'data': [keyword]});
        });
    });

    keywordsRouter.delete('/:id', function (req, res) {
        keywordsDB.remove({id: req.params.id}, {}, function (err, count) {
            res.status(204).end();
        });
    });

    app.use('/api/keywords', keywordsRouter);
};
