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

/* Uses Post request data to update Model list and perform search */
const searchLeads = async (req, res) => {
	try {
		const data = convertFilterCase(req.body.search);
		const query = await Model.list(data);
		return res.status(200).json(query);
	} catch (err) {
		return res.status(400).json(err);
	}
};

/* Converts last item in filter array to lower case  */
const convertFilterCase = (data) => {
	data.filters.forEach((arr) => {
		if (arr.length >= 2) {
			var last = arr.pop().toLowerCase();
			arr.push(last);
		}
	});
	return data;
};

module.exports = {
	searchLeads,
	getAllLeads,
};
