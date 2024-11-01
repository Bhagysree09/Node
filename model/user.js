const mongoose = require('mongoose');

//Define the user schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum: ['chef', 'waiter', 'manager'],
        required:true
    },  
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        reuired:true,
        unique: true
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true,
    },
    username:{
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    password:{
        type:String,
        required: true,
    }
});

//create user model
const User = mongoose.model('User', userSchema);
module.exports= User;