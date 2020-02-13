var mysql = require('mysql');

var con = mysql.createConnection({
  host: "HadarHuawei",
  user: "hadarlapidot",
  password: "Napoleon1821!",
  insecureAuth: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
