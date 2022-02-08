const { instances } = require("gstore-node");
const gstore = instances.get("default");

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
