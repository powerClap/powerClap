import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  managedBy: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  members: [{type: ObjectId, ref: 'User'}]
})


const Project = mongoose.model('Project', projectSchema);

export default Project;