const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    header:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image: { 
        data: Buffer, 
        contentType: String 
    }
});

module.exports= mongoose.model('Blog',blogSchema);