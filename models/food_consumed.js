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
    food:{
            type:Schema.Types.ObjectId,
            ref:'Food'
    },
    repastId: {
            type:Schema.Types.ObjectId,
            ref:'Repast'
    }
});

module.exports= mongoose.model('UserInfo',userInfoSchema);