import mongoose from 'mongoose';
const { Schema } = mongoose;

const VisitSchema = new Schema({
    patVisitDate: { type: Date, required:true },
    patID: { type: Number },
    patMobile: { type: Number},
    visitPurpose: { type: String, required:true },
    problemsTagged:{type: Array},
    prescriptionList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prescription'
    }]
},
{timestamps:true}

);

export default mongoose.model("Visit", VisitSchema)