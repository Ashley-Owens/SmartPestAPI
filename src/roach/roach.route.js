const express = require("express");
const Controller = require("./roach.controller");

// Handles requests
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/* POST Route: creates a new RoachAssessment Entity */
router.post("/", async function (req, res) {
	try {
		const key = await Controller.createRoachEntity(req.body);
		// console.log(key.entityKey.id);
		res.status(201).json(key).end();
	} catch (err) {
		console.log(err);
		res.status(400).send({
			Error: "The request object is missing at least one of the required attributes",
		});
	}
});

/* GET Route. */
router.get("/", function (req, res) {
	res.send("Roach Model route working");
});

module.exports = router;
