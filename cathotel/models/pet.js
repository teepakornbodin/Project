import { BSON, Double, Int32, ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

//การกำหนด tpye
const PetSchema = new Schema({
    code: {
        type: String,
    },
  name: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", //พิเศษ
    default: null,
  },
  breed: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["MALE", "FE", "PENDING"],
    default: "MALE",
  },
  color: {
    type: String,
  },
  age: {
    type: Number,
    default: 1
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Pet = models.Pet || model("Pet", PetSchema, 'pet');

export default Pet;
