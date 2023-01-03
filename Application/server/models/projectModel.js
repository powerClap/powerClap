import mongoose, { Schema } from 'mongoose';

const projectSchema = mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },

  projectDescription: {
    type: String,
    required: true
  },
  // managedBy: {
  //   type: ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  members: [{type: String}],
  creator: {
    type: Schema.Types.ObjectId,
  }
})


const Project = mongoose.model('Project', projectSchema);

export default Project;