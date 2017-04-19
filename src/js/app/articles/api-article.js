//--------------
//-----MODEL----
//------------//
var Articles = require('./article-model').Articles;

//--------------
//-----API------
//------------//
module.exports = function (app) {

    app.get('/api/articles', function (req, res) {
        Articles.find(function (err, data) {
            if(err)
                res.send(err)
            res.json(data); // return all articles in json
        });
    });

    app.post('/api/articles', function (req, res) {
        Articles.create({
            text: req.body.text,
            done: false
        }, function (err, data) {
            if (err)
                res.send(err);

            Articles.find(function (err, data) {
                if (err)
                    res.send(err);
                res.json(data);
            });
        });
    });

    app.delete('/api/articles/:article_id', function (req, res) {
        Articles.remove({
            _id: req.params.article_id
        }, function (err, data) {
            if (err) { res.send(err); }

            Articles.find(function (err, data) {
                if (err) { res.send(err); }
                res.json(data);
            });
        });
    });
}
