var express = require('express'),
    logger = require('morgan'),
    app = express(),
    homepage = require('jade').compileFile(__dirname + '/source/templates/homepage.jade'),
    about = require('jade').compileFile(__dirname + '/source/templates/about.jade'),
    fun = require('jade').compileFile(__dirname + '/source/templates/fun.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = homepage({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/about', function(req, res){
  console.log('Accessing the "About" page');
  try {
    var html = about({ title: 'About' })
    res.send(html)
  } catch (e) {
    next(e)
  }
});

app.get('/fun', function(req, res){
  console.log('Accessing the "Fun" page');
  try {
    var html = fun({ title: 'Fun' })
    res.send(html)
  } catch (e) {
    next(e)
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})