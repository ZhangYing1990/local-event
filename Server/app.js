/**
 * Created by ZhiyuanSun on 16/9/20.
 */
var Express = require('express');

let app = Express();

app.get('/', function (req, res){
  res.send(`hello world!`);
});

app.listen(4321, function(){
  console.log('server running http://localhost:4321');
});