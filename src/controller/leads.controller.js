const { instances } = require("gstore-node");
const gstore = instances.get("default");
const Model = require("../models/lead.model");

/* Sends Lead entities using pagination */
const getAllLeads = async (req, res) => {
	try {
		const query = await Model.list(req.query);
		return res.status(200).json(query);
	} catch (err) {
		return res.status(400).json(err);
	}
};

const searchLeads = async (req, res) => {
	try {
		console.log(req.body.search);
		const query = await Model.list();
		return res.status(200).json(query);
	} catch (err) {
		return res.status(400).json(err);
	}
};

module.exports = {
	searchLeads,
	getAllLeads,
};
