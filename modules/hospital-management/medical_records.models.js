import mongoose from 'mongoose';

const medicalRecordSchema = mongoose.Schema({}, { timestemps: true });

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
