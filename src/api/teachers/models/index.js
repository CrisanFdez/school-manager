const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
  },
  { timestamps: true }
);

module.exports = model("teachers", schema);
