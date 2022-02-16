const Model = require("../models/lead.model");

/* Accepts "limit" and "cursor" query strings, sending all entities using pagination */
const getAllLeads = async (req, res) => {
	try {
		const query = await Model.list({
			start: req.query.cursor,
			limit: req.query.limit,
		});
		return res.status(200).json(query);
	} catch (err) {
		return res.status(400).json(err);
	}
};

/* Uses Post request data to update Model list and perform search */
const searchLeads = async (req, res) => {
	try {
		const data = convertFilters(req.body.search);
		const query = await Model.list(data);
		return res.status(200).json(query);
	} catch (err) {
		return res.status(400).json(err);
	}
};

/* Converts filter data to lower case and/or datetime object */
const convertFilters = (data) => {
	data.filters.forEach((arr) => {
		if (arr.length >= 2) {
			if (arr[0] === "dateCreated") {
				// Convert string to date object
				let query = arr.pop();
				let date = new Date(query);
				arr.push(date);
			} else {
				var query = arr.pop().toLowerCase();
				arr.push(query);
			}
		}
	});
	return data;
};

module.exports = {
	searchLeads,
	getAllLeads,
};
