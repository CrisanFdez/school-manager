const Courses = require("../models");

module.exports = {
  getAll: async (req, res) => {
    const courses = await Courses.find();
    res.json(courses);
  },
  createCourse: async (req, res) => {
    const { name } = req.body;
    const newCourse = new Courses({ name });
    await newCourse.save();
    res.send(`${name} saved`);
  },
  updateCourse: async (req, res) => {
    const { _id } = req.params;
    const { name } = req.body;
    await Courses.findByIdAndUpdate(
      _id,
      {
        $set: { name },
      },
      { useFindAndModify: false }
    );
    res.send(`${name} updated`);
  },
  deleteCourse: async (req, res) => {
    const { _id } = req.params;
    const removed = await Courses.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  },
  assignTeacher: async (req, res) => {
    const { _id } = req.params;
    const { teacher } = req.body;
    const courseUpdated = await Courses.findByIdAndUpdate(
      _id,
      {
        $push: { teachers: teacher },
      },
      { useFindAndModify: false }
    );
    res.send(`${courseUpdated.name} updated`);
  },
  removeTeacher: async (req, res) => {
    const { _id } = req.params;
    const { teacher } = req.body;
    const courseUpdated = await Courses.findByIdAndUpdate(
      _id,
      {
        $pull: { teachers: teacher },
      },
      { useFindAndModify: false }
    );
    res.send(`${courseUpdated.name} updated`);
  },
};
