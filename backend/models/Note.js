const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    },
    tags:{
        type:Array,
        required:false
    },
},
{timestamps:true}
);

module.exports = mongoose.model("Note", NoteSchema);