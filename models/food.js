const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    servingSize:{
        type:String,
        required:true
    },
    calories:{
        type:Number,
        required:true
    },
    fat:{
        type:Number,
        required:true
    },
    protein:{
        type:Number,
        required:true
    },
    carbs:{
        type:Number,
        required:true
    },
    fiber:{
        type:Number,
        required:true
    },
    sugar:{
        type:Number,
        required:true
    }
});

module.exports= mongoose.model('Food',foodSchema);