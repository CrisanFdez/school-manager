const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    courses: [
      { type: Schema.Types.ObjectId, ref: "courses", autopopulate: true },
    ],
  },
  { timestamps: true }
);

schema.plugin(require("mongoose-autopopulate"));

const model = mongoose.model("students", schema);
module.exports = model;
