const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = model('User', UserSchema);
