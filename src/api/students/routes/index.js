const { Router } = require("express");
const router = Router();
const validate = require("../middleware");
const auth = require("../auth");
const {
  getAll,
  createStudent,
  updateStudent,
  deleteStudent,
  assignCourse,
} = require("../controllers");

router.get("/students", getAll);
router.post("/students", validate(auth), createStudent);
router.put("/students/:_id", validate(auth), updateStudent);
router.delete("/students/:_id", deleteStudent);
router.put("/students/assignCourse/:_id", assignCourse);

module.exports = router;
