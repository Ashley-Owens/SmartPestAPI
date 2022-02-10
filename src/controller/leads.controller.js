const { instances } = require("gstore-node");
const gstore = instances.get("default");

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

/* Returns all leads by status type: New, Open, Won etc. */
const getLeadsByStatus = async (req, res, status) => {
	try {
		const query = gstore.ds.createQuery();
		const [entities] = await gstore.ds.runQuery(query);
		if (status) {
			const filtered = entities.filter((e) => e.status === status);
			return res.status(200).json(filtered);

			// Returns All leads
		} else {
			return res.status(200).json(entities);
		}
	} catch (err) {
		return res.status(400).json(err);
	}
};

module.exports = {
	getLeadsByStatus,
};
