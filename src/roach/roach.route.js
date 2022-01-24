const express = require("express");
const Controller = require("./roach.controller");

// Initializes router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Handles router requests
router.get("/", Controller.getRoachAssessments);
router.get("/:id", Controller.getRoachAssessment);
router.post("/", Controller.createRoachEntity);

module.exports = router;
