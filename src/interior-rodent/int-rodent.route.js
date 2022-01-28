const express = require("express");
const Controller = require("../controller/controller");
const Model = require("./int-rodent.model");

// Initializes router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Handles router requests
router.get("/", async (req, res) => Controller.getAllEntities(req, res, Model));
router.get("/:id", async (req, res) => Controller.getEntity(req, res, Model));
router.post("/", async (req, res) => Controller.createEntity(req, res, Model));
router.put("/:id", async (req, res) =>
	Controller.updateEntity(req, res, Model)
);

module.exports = router;
