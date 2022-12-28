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
  responsibleBy: [{type: ObjectId, ref: 'User'}],
  stage: {type: String},
})


const Card = mongoose.model('Card', cardSchema);

export default Card;