import mongoose from 'mongoose';

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adddress: {
      type: String,
      required: true,
    },
    specialization: [{ type: String }],
  },
  { timestemps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
