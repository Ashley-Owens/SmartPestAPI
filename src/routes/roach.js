// const gstore = require("../config/datastore.js");
const RoachModel = require("../models/roach.model");
const express = require("express");
const router = express.Router();

// Handles POST requests
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/* ------------- Begin Controller Functions ------------- */

/* GET Route. */
router.get("/", function (req, res) {
	res.send("Roach Model route working");
});

module.exports = router;
