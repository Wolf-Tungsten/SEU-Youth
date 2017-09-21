/**
 * Created by WolfTungsten on 2017/9/21.
 */
var connect = require("connect");
var serveStatic = require("serve-static");

var app = connect();
app.use(serveStatic("./Template"));
app.listen(5000);