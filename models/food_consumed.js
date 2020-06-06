const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    date:{
        type:Date,
        required:true
    },
    userId:{
            type:Schema.Types.ObjectId,
            ref:'User'
    },
    foodId:{
            type:Schema.Types.ObjectId,
            ref:'Food'
    },
    repastId: {
            type:Schema.Types.ObjectId,
            ref:'Repast'
    },
    quantity:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model('UserInfo',userInfoSchema);