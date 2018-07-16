const sql = require('mssql');
const port = process.env.PORT || 8000;

const dbConfig = {
    server:"SRINIVAS-2504\\SQLEXPRESS",
    database:"EmployeeDB",
    user:"sa",
    password:"9603313561",
    port:"1433"
}

function getEmployees(){
var con = new sql.Connection(dbConfig);

con.connect().then(function(){

    var req = new sql.Request(con);

    req.query("SELECT * FROM Employee").then(function(data){
      console.log(JSON.stringify(data));
      con.close();
    }).catch(function(err){
        console.log(err);
        con.close();
    });

})
.catch(function(err){
console.log(err);
});

//----------------------------------------------------------

//var req = new sql.Request(con);
// con.connect(function(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//     req.query("SELECT * FROM Employee",function(err,recordset){
//         if(err){
//             console.log(err);
//         }
// else{
//     console.log(recordset);
// }
// con.close();
//     });
// });
}
getEmployees();