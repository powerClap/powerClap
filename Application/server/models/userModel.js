import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    // Username and password must be provided due to the required property
    // If the required field is not provided, a validation error will be
    // thrown with the specified error message
    required: [true, 'Please add a username']
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
},
{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
