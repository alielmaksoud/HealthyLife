const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    height:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    calories:{
        type:Number,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports= mongoose.model('UserInfo',userInfoSchema);