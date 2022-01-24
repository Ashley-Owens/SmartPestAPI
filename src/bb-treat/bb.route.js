const express = require("express");
const Controller = require("./bb.controller");

// Initializes router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Handles router requests

module.exports = router;
