const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// create Geolocation Schema
const GeoSchema=new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
});




//Create User Schema

const UserSchema=new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    rank:{
        type:String 
    },
    available:{
        type:String,
        default:"true"
    },
    geometry:GeoSchema
  
});
const User=mongoose.model('user',UserSchema);
module.exports=User;

