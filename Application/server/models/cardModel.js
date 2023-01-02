import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  project: {
    type: ObjectId,
    ref: 'Project',
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  responsibleBy: [{type: String}],
  startDate: {type: String},
  deadline: {type: String},
  stage: {type: String},
})


const Card = mongoose.model('Card', cardSchema);

export default Card;