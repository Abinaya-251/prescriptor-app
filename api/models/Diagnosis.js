import mongoose from 'mongoose';
const { Schema } = mongoose;

const DiagnosisSchema = new Schema({
    patVisitDate: { type: Date, required:true },
    patID: { type: Number },
    healthStats: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Healthstats'
    },
    visitPurpose:{ type: String, required:true},
    diagnosisInfo:{
        type: Map,
        of: String
    },
    treatmentNotes: { type: String, required:true },
    prescriptionList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prescription'
    }],
    attachments:{
        type: Map,
        of: String
    }
  },
{timestamps:true}

);

export default mongoose.model("Diagnosis", DiagnosisSchema)