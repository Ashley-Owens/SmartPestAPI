const express = require("express");
const Controller = require("../controller/lead.controller");

// Initializes router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Handles router requests
router.get("/:id", async (req, res) => Controller.getEntity(req, res));
router.post("/", async (req, res) => Controller.createEntity(req, res));
router.put("/:id", async (req, res) => Controller.updateEntity(req, res));

module.exports = router;
