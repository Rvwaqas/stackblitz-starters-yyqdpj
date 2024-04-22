import mongoose from 'mongoose';

const patientSchema = mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  diagnosedWith:{
    type:String,
    required:true
  },
  address:{
    type:Sting,
    required:true
  },
  age:{
    type:String,
    required:true
  },

  bloodGroup:{
    type:String,
    required:true
  },

  gender:{
    type:string,
    enum:["M","F","O"],
    required:true
  },
  admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  },
  


}, { timestemps: true });

export const Patient = mongoose.model('Patient', patientSchema);
