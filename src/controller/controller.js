const Model = require("../models/lead.model");

/* Returns all entities for the given model */
// const getAllEntities = async (req, res, Model) => {
// 	const pageCursor = req.query.cursor;
// 	try {
// 		const { entities } = await Model.list({ start: pageCursor });
// 		return res.status(200).json(entities);
// 	} catch (err) {
// 		return res.status(400).json(err);
// 	}
// };

/* Retrieves a single entity by ID for given model */
const getEntity = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		const entity = await Model.get(id);
		res.status(200).json(entity.plain());
	} catch (err) {
		res.status(400).json(err);
	}
};

/* Creates a new entity for the given model */
const createEntity = async (req, res) => {
	if (req.get("content-type") !== "application/json") {
		res.status(415).send({
			Error: "Server only accepts application/json data",
		});
		return;
	}
	try {
		const data = Model.sanitize(req.body);
		const entity = await new Model(data).save();
		res.status(201).json(entity.plain());
	} catch (err) {
		res.status(400).json(err);
	}
};

/* Updates or replaces data for specified entity model ID */
const updateEntity = async (req, res) => {
	if (req.get("content-type") !== "application/json") {
		res.status(415).send({
			Error: "Server only accepts application/json data",
		});
		return;
	}
	try {
		req.body.dateModified = new Date();
		const id = parseInt(req.params.id, 10);
		const data = Model.sanitize(req.body);
		const entity = await Model.update(id, data);
		res.status(200).json(entity.plain());

		// Catches schema validation errors or invalid id
	} catch (err) {
		res.status(400).json(err);
	}
};

module.exports = {
	getEntity,
	createEntity,
	updateEntity,
};
