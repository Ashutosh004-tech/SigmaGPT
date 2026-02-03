import mongoose from 'mongoose';
const { Schema } = mongoose;

const MessageSchema = new Schema({
    role:{
        type:String,
        enum:["user","model"],
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    timeStamp:{
        type:Date,
        default:Date.now,
    }
});

const ThreadSchema = new Schema ({
    threadId:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        default:"Recent chat"
    },
    message:[MessageSchema],
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAr:{
        type:Date,
        default:Date.now,
    }
})

export default mongoose.model("Thread",ThreadSchema);