var mysql = require('mysql2');
var http = require('http');


    // Log data to the console (you can replace this with your own functionality)

//create a server object:
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "Ashar123@",
        database: "timeless_rides_login"
      });
      
      con.connect(function(err) {
       /**  if (err) throw err;
        var sql = "INSERT INTO timeless_rides_info (username) VALUES ('Via Node 2nd entry');";
        con.query(sql, function (err, result) {
            if (err) throw err;
                console.log("1 record inserted");
             });
             */
        var displaysql = "select * from timeless_rides_info;"
        con.query(displaysql, function (err, result) {
            if (err) throw err;
                console.log(result);
             });
      });