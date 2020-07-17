const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
  },
  { timestamps: true }
);

const model = mongoose.model("teachers", schema);
module.exports = model;
