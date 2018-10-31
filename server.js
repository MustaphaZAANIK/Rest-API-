const express=require('express');
const bodyParser=require('body-parser');
const router=require('./routes/api');
const mongoose=require('mongoose');

//set up mongodb 
mongoose.connect('mongodb://localhost/hierachy',{ useNewUrlParser: true });
mongoose.Promise=global.Promise;
const app=express();
app.use(bodyParser.json());
//set up express

app.use('/api',router);

//error handling
app.use((err,req,res,next)=>
console.log(err)
);



app.listen(4000,function(){
    console.log("listening for requests on",4000)
});


