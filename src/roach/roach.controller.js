const Model = require("./roach.model");

/* Returns all Roach Assessment Entities */
const getRoachAssessments = async (req, res) => {
	const pageCursor = req.query.cursor;
	try {
		const { entities } = await Model.list({ start: pageCursor });
		res.status(200).json(entities);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
};

/* Retrieves a single Roach Assessment Entity by ID */
const getRoachAssessment = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		const entity = await Model.get(id);
		res.status(200).json(entity.plain());
	} catch (err) {
		res.status(400).json(err);
	}
};

/* Creates a new Roach Assessment Entity */
const createRoachEntity = async (req, res) => {
	try {
		const data = Model.sanitize(req.body);
		const entity = await new Model(data).save();
		res.status(201).json(entity.plain());
	} catch (err) {
		console.log(err);
		res.status(400).send({
			Error: "The request object is missing at least one of the required attributes",
		});
	}
};

module.exports = {
	getRoachAssessments,
	getRoachAssessment,
	createRoachEntity,
	// updateRoachAssessment,
};
