const { instances } = require("gstore-node");
const gstore = instances.get("default");
const Model = require("../models/lead.model");

/* Accepts "limit" query string, sending Lead entities using pagination */
const getAllLeads = async (req, res) => {
	try {
		const query = await Model.list(req.query);
		return res.status(200).json(query);
	} catch (err) {
		return res.status(400).json(err);
	}
};

// Uses Post request data to update Model list and perform search
const searchLeads = async (req, res) => {
	try {
		const search = req.body.search;
		// search.filters[0].slice(-1).toLowerCase;
		// Object.keys(search).forEach(function (key) {
		// 	console.log(search[key]);
		// 	search[key] = search[key].toLowerCase();
		// });
		// console.log(search);
		const query = await Model.list(search);
		return res.status(200).json(query);
	} catch (err) {
		return res.status(400).json(err);
	}
};

module.exports = {
	searchLeads,
	getAllLeads,
};
