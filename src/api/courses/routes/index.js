const { Router } = require("express");
const router = Router();
const validate = require("../middleware");
const auth = require("../auth");
const {
  getAll,
  createCourse,
  updateCourse,
  deleteCourse,
  assignTeacher,
  removeTeacher,
} = require("../controllers");

router.get("/courses", getAll);
router.post("/courses", validate(auth), createCourse);
router.put("/courses/:_id", validate(auth), updateCourse);
router.delete("/courses/:_id", deleteCourse);
router.put("/courses/assignTeacher/:_id", assignTeacher);
router.put("/courses/removeTeacher/:_id", removeTeacher);

module.exports = router;
