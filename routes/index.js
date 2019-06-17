const express = require("express");
const router = express.Router();
const campusesController = require("../controllers").campuses;
const studentsController = require("../controllers").students;

/* Campuses route */
router.get("/api/campuses", campusesController.list);
router.get("/api/campuses/:id", campusesController.getById);
router.post("/api/campuses", campusesController.add);
router.put("/api/campuses/:id", campusesController.update);
router.delete("/api/campuses/:id", campusesController.delete);

/* Students route */
router.get("/api/students", studentsController.list);
router.get("/api/students/:id", studentsController.getById);
router.post("/api/students", studentsController.add);
router.put("/api/students/:id", studentsController.update);
router.delete("/api/students/:id", studentsController.delete);

module.exports = router;
