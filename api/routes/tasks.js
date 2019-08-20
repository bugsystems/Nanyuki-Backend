var express =  require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
 
 
 
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'backend'
});
 
connection.connect((function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
}));
 
   
connection.query('SELECT * FROM task LIMIT 10', function(err, rows) {
    
    if (err) {
        
        console.log(err);
        
       
    }
    
     console.log(rows[0]);
        
  // connected! (unless `err` is set) 
});
 
 
// to retrieve all memory blocks 
 
router.get('/',function(req,res){
    
   
var quer1 = "SELECT * FROM task LIMIT 10";
 
 
 connection.query(quer1, function(err, rows) {
    
    if (err) {
        
        console.log(err);
        
       
    }
    
     console.log(rows);
     res.send(rows);
        
  // connected! (unless `err` is set) 
});

});


module.exports = router;