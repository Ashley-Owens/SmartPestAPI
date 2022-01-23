const express = require("express");
const Controller = require("./roach.controller");

// Initializes router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Handles router requests
router.post("/", Controller.createRoachEntity);
router.get("/", Controller.getRoachAssessments);

module.exports = router;
