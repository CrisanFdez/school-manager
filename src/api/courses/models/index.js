const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    teachers: [
      { type: Schema.Types.ObjectId, ref: "teachers", autopopulate: true },
    ],
  },
  { timestamps: true }
);

schema.plugin(require("mongoose-autopopulate"));
module.exports = model("courses", schema);
