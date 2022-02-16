const Model = require("../models/lead.model");

/* Retrieves a single entity by ID */
const getEntity = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		const entity = await Model.get(id);
		res.status(200).json(entity.plain());
	} catch (err) {
		res.status(400).json(err);
	}
};

/* Creates a new entity */
const createEntity = async (req, res) => {
	if (req.get("content-type") !== "application/json") {
		res.status(415).send({
			Error: "Server only accepts application/json data",
		});
		return;
	}
	try {
		// Sanitizes and converts data to lower case
		let data = Model.sanitize(req.body);
		const entity = await new Model(convertCase(data)).save();
		res.status(201).json(entity.plain());
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
};

/* Updates or replaces data for given entity ID */
const updateEntity = async (req, res) => {
	if (req.get("content-type") !== "application/json") {
		res.status(415).send({
			Error: "Server only accepts application/json data",
		});
		return;
	}
	try {
		const id = parseInt(req.params.id, 10);
		let data = Model.sanitize(req.body);
		const entity = await Model.update(id, convertCase(data));
		res.status(200).json(entity.plain());

		// Catches schema validation errors or invalid id
	} catch (err) {
		res.status(400).json(err);
	}
};

/* Iterates through request body converting strings to lower case  */
const convertCase = (data) => {
	Object.keys(data).forEach(function (key) {
		const value = data[key];
		if (typeof value === "string") {
			data[key] = data[key].toLowerCase();
		}
	});
	return data;
};

module.exports = {
	getEntity,
	createEntity,
	updateEntity,
};
