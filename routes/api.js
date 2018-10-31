const express = require('express');
const router=express.Router();
const User=require('../models/user');

//get a json list of users from database
router.get('/users',(req,res)=>
  User.aggregate([
      { $geoNear:
        {
          "near": { 'type': 'Point',  'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)] }, 
          "spherical": true, 
          "distanceField": 'dist.calculated', 
           "maxDistance": parseFloat(req.query.max),

         }
  
      
      }]).then(users=>
    res.send(users))
);

//add user to database
router.post('/users',(req,res,next)=>
  User.create(req.body).then(user=>
  res.send(user)).catch(next)

);
// update a user in db
router.put('/users/:id',(req,res,next)=>
 User.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>
    User.findById({_id:req.params.id}).then(user=>
        res.send(user) )
    )
);
//delete user from db

router.delete('/users/:id',(req,res,next)=>
 User.findByIdAndRemove({_id:req.params.id}).then(user=>
    res.send(user))
);

module.exports=router;



