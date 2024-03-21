import { BSON, Double, Int32, ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

//การกำหนด tpye
const BookingSchema = new Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
  guests: {
    type: Number,
  },
  room_type: {
    type: String,
    enum: ["DELUXE", "STANDARD", "SUIT", "PREMIUM", "SUPERIOR", "FAMILY"],
    default: "STANDARD",
  },
  
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE", "PENDING"],
    default: "PENDING",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Booking = models.Booking || model("Booking", BookingSchema, 'booking');

export default Booking;
