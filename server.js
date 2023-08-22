var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rrrr",
    database: "loja"
})

con.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");

    var sql = `SELECT * FROM produto`; 
    var sql2 = 'UPDATE produto SET categoria = 1 WHERE nome = "sofa"';
    
    con.query(sql2, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});