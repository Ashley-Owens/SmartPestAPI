// const { instances } = require("gstore-node");
// const gstore = instances.get("default");
// const Model = require("../models/lead.model");
const ds = require("../config/database");
const datastore = ds.datastore;
const LIMIT = 30;
const LEAD = "lead";

/* Sends Lead entities using pagination */
const getAllLeads = async (req, res) => {
	const pageCursor = req.query.cursor;
	try {
		const results = await runPageQuery(pageCursor);
		return res.status(200).json(results);
	} catch (err) {
		return res.status(400).json(err);
	}
};

/* Returns all entities for the given query using pagination */
async function runPageQuery(pageCursor) {
	let query = datastore.createQuery("lead").limit(30);
	console.log("cursor", pageCursor);
	if (pageCursor) {
		query = query.start(pageCursor);
	}
	const results = await datastore.runQuery(query);
	const entities = results[0];
	const info = results[1];
	return { entities: entities, info: info };
}

/* Returns all leads by status type: New, Open, Won etc. */
// const getLeadsByStatus = async (req, res, status) => {
// 	try {
// 		const query = datastore.createQuery();
// 		const [entities] = await datastore.runQuery(query);
// 		if (status) {
// 			const filtered = entities.filter((e) => e.status === status);
// 			return res.status(200).json(filtered);

// 			// Returns All leads
// 		} else {
// 			return res.status(200).json(entities);
// 		}
// 	} catch (err) {
// 		return res.status(400).json(err);
// 	}
// };

module.exports = {
	// getLeadsByStatus,
	getAllLeads,
};
