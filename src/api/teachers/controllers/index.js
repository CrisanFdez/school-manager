const Teachers = require("../models");

module.exports = {
  getAll: async (req, res) => {
    const teachers = await Teachers.find();
    res.json(teachers);
  },
  createTeacher: async (req, res) => {
    const { firstName, lastName, age } = req.body;
    const newTeacher = new Teachers({
      firstName,
      lastName,
      age,
    });
    await newTeacher.save();
    res.send(`${newTeacher.firstName} saved`);
  },
  updateTeacher: async (req, res) => {
    const { _id } = req.params;
    const { firstName, lastName, age } = req.body;
    const teacherUpdated = await Teachers.findByIdAndUpdate(
      _id,
      {
        $set: { firstName, lastName, age },
      },
      { useFindAndModify: false }
    );
    res.send(`${teacherUpdated.firstName} updated`);
  },
  deleteTeacher: async (req, res) => {
    const { _id } = req.params;
    const teacherDeleted = await Teachers.findByIdAndDelete(_id);
    res.send(`${teacherDeleted.firstName} deleted`);
  },
};
