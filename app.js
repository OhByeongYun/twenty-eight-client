var express = require('express')
  , app = express();

app.use(express.static(__dirname + '/dist'));
app.use('/app/', express.static(__dirname + '/src/app/'));
app.use(require('connect-livereload')({
    port: 35729
}));

app.listen(3000);