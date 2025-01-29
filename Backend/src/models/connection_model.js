
const mongoose=require('mongoose');

const connectionRequestSchema=new mongoose.Schema({
    fromUserId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    toUserId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"

    },
    status:{
        type:String,
        enum:{
            values:["accepted","rejected","ignored","interested"],
            message:'{VALUE} is not supported'
        },
        required:true
    }
},{timestamps:true})

 connectionRequestSchema.index({fromUserId:1, toUserId:1})

const ConnectionRequest=new mongoose.model('ConnectionRequest',connectionRequestSchema);
module.exports=ConnectionRequest;
