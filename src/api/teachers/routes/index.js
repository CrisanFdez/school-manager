const { Router } = require("express");
const router = Router();
const validate = require("../middleware");
const auth = require("../auth");
const {
  getAll,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controllers");

router.get("/teachers", getAll);
router.post("/teachers", validate(auth), createTeacher);
router.put("/teachers/:_id", validate(auth), updateTeacher);
router.delete("/teachers/:_id", deleteTeacher);

module.exports = router;
