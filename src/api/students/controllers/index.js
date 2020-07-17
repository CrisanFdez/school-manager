const Students = require("../models");

module.exports = {
  getAll: async (req, res) => {
    const students = await Students.find();
    res.send(students);
  },
  createStudent: async (req, res) => {
    const { firstName, lastName, age } = req.body;
    const newStuden = new Students({ firstName, lastName, age });
    await newStuden.save();
    res.send(`${newStuden.firstName} saved`);
  },
  updateStudent: async (req, res) => {
    const { _id } = req.params;
    const { firstName, lastName, age } = req.body;
    const updatedStudent = await Students.findByIdAndUpdate(
      _id,
      { $set: { firstName, lastName, age } },
      { useFindAndModify: false }
    );
    res.send(`${updatedStudent.firstName} updated`);
  },
  deleteStudent: async (req, res) => {
    const { _id } = req.params;
    const deletedStudent = await Students.findByIdAndDelete(_id);
    res.send(`${deletedStudent.firstName} deleted`);
  },
  assignCourse: async (req, res) => {
    const { _id } = req.params;
    const { course } = req.body;
    const studentUpdated = await Students.findByIdAndUpdate(
      _id,
      {
        $push: { courses: course },
      },
      { useFindAndModify: false }
    );
    res.send(`${studentUpdated.firstName} updated`);
  },
};
