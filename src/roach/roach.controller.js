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

/* Creates a new Roach Assessment Entity */
const createRoachEntity = async (req, res) => {
	try {
		const entity = await new Model(req.body).save();
		res.status(201).json(entity);
	} catch (err) {
		console.log(err);
		res.status(400).send({
			Error: "The request object is missing at least one of the required attributes",
		});
	}
};

module.exports = {
	getRoachAssessments,
	createRoachEntity,
	// getRoachAssessment,
	// updateRoachAssessment,
};
