const Model = require("./roach.model");

const getRoachAssessments = (req, res) => {
	const pageCursor = req.query.cursor;

	// List users with the Query settings defined on Schema
	Model.list({ start: pageCursor })
		.then((entities) => {
			res.json(entities);
		})
		.catch((err) => res.status(400).json(err));
};

async function createRoachEntity(data) {
	const roach = new Model(data);
	return await roach.save();
}

module.exports = {
	getRoachAssessments,
	// getUser,
	createRoachEntity,
	// updateUser,
	// deleteUser
};
