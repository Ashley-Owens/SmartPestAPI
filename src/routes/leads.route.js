const express = require("express");
const Controller = require("../controller/leads.controller");

// Initializes router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Handles router requests
router.get("/", async (req, res) => Controller.getAllLeads(req, res));
router.post("/search", async (req, res) => Controller.searchLeads(req, res));

module.exports = router;
