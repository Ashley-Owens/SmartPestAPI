const express = require("express");
const Controller = require("../controller/leads.controller");

// Initializes router
const router = express.Router();
router.use(express.json());

// Handles router requests
router.get("/", async (req, res) =>
	Controller.getLeadsByStatus(req, res, null)
);
router.get("/new", async (req, res) =>
	Controller.getLeadsByStatus(req, res, "New")
);
router.get("/open", async (req, res) =>
	Controller.getLeadsByStatus(req, res, "Open")
);
router.get("/won", async (req, res) =>
	Controller.getLeadsByStatus(req, res, "Won")
);
router.get("/lost", async (req, res) =>
	Controller.getLeadsByStatus(req, res, "Lost")
);
router.get("/sent", async (req, res) =>
	Controller.getLeadsByStatus(req, res, "Sent")
);

module.exports = router;
