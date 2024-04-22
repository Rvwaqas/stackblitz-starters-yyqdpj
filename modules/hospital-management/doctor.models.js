import mongoose from 'mongoose';

const hourSchema = mongoose.Schema({
  hospitals: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  },
  workHour: {
    type: Number,
    required: true,
  },
});

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: Sting,
      required: true,
    },
    salery: {
      type: String,
      required: true,
    },
    qulification: {
      type: String,
      required: true,
    },
    exprienceInYear: {
      type: Number,
      required: true,
    },
    workInHospitals: [hourSchema],
  },
  { timestemps: true }
);

export const Doctor = mongoose.model('MedicalRecord', doctorSchema);
