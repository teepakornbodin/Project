import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  breed: { type: String, required: true },
  gender: { type: String, enum: ['MALE', 'FE', 'PENDING'], default: 'MALE' },
  color: { type: String, required: true },
  age: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
  check_out: { type: Date },
  health: { type: String, enum: ['GOOD', 'BAD'], default: 'GOOD' },
  food: { type: String, enum: ['NOT EATEN', 'EATEN'], default: 'NOT EATEN' },
  excretion: { type: String, enum: ['EXCRETED', 'NOT EXCRETED'], default: 'NOT EXCRETED' },
}, { collection: 'pet' });

// Export the model here
const Pet = mongoose.models.Pet || mongoose.model('Pet', PetSchema);

export default Pet;