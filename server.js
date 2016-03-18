var express = require('express');
var app     = express();
var mongojs = require('mongojs');
//local and for heroku dbs. Comment out depending on which one
var db = mongojs('copypaste', ['copypaste']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/copypaste', function(req,res){
    console.log("I received a GET request");
    db.copypaste.find(function(err, docs){
      console.log(docs);
      res.json(docs);
    });
  });

app.post('/copypaste', function (req, res) {
  console.log(req.body);
  db.copypaste.insert({_id: mongojs.ObjectId(), number: req.body.number, name: req.body.name, description: req.body.description, value: req.body.value},
  function(err,doc){
    res.json(doc);
  });
});

app.delete('/copypaste/:id', function (req, res){
  var id = req.params.id;
  console.log(id);
  db.copypaste.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
    res.json(doc);

  });
});

app.get('/copypaste/:id', function (req,res){
  var id = req.params.id;
  console.log(id);
  db.copypaste.findOne({_id:mongojs.ObjectId(id)}, function(err,doc){
    res.json(doc);
  });
});

app.put('/copypaste/:id', function(req, res){
  var id = req.params.id;
  console.log(req.body.name);
  db.copypaste.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set:{number: req.body.number, name: req.body.name, description: req.body.description, value: req.body.value}},
    new: true}, function (err, doc){
      res.json(doc);

  });
});

app.listen(3000);
console.log("Server running on port 3000");
