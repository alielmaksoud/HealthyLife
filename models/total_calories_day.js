const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const totalCaloriesSchema = new Schema({
    totalCalories:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports= mongoose.model('TotalCaloriesDay',totalCaloriesSchema);