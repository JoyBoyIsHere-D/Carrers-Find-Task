import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  experience: {type: String, required: true},
  description: { type: String, required: true },
  minimumQualificatoins: { type: String, required: true}
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
