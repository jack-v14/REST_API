import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);
// mongoose.model('name used to access his schema ' , actual schema )

export default mongoose.model('User', userSchema);
