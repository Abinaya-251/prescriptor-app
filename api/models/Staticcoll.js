import mongoose from 'mongoose';
const { Schema } = mongoose;

const StaticCollSchema = new Schema({
    attributeName:{type:String},
    attributeValue:{type:Array}
    //drugType:{type:Array},
    //appntStatus:{type:Array},
    //specialization:{type:Array},
    //problemTypes:{type:Array},
    //gender:{type:Array},
    //ageClassifier:{type:Array}
  },
{timestamps:true}

);

export default mongoose.model("Staticcoll", StaticCollSchema)