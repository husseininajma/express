const express = require("express");
const app = express();

app.get("/", function(request, response){
  response.send("<h1>hello</h1>");
});
app.get("/contact", function(req, res){
  res.send("Contact me at: nj.husseini@gmail.com");
});
app.get("/about", function(req, res){
  res.send("Najma Hussaini<br/>31 Jahre alt<br/>Fullstack Web Developer");
});

 
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
