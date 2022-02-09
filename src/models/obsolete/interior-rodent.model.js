const { instances } = require("gstore-node");
const gstore = instances.get("default");
const { Schema } = gstore;

// Create the "InteriorRodent" schema
const schema = new Schema(
	{
		cutOut: { type: Boolean, required: true },
		unitNums: { type: Array, required: true },
		observations: { type: String, required: true },
		status: { type: String, default: "New" },
		kind: { type: String, default: "InteriorRodent" },
		propertyName: { type: String, required: true },
		address: { type: String, required: true },
		zipCode: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		technician: { type: String, required: true },
		madeContact: { type: Boolean, required: true },
		contactName: { type: String },
		contactTitle: { type: String },
		dateCreated: { type: Date, default: gstore.defaultValues.NOW },
		dateModified: { type: Date },
		notes: { type: String },
	},
	{
		queries: {
			readAll: true,
		},
	}
);

// Query shortcut for listing entities
const listSettings = {
	order: { property: "dateCreated", descending: true },
};
schema.queries("list", listSettings);

// Generates "InteriorRodent" entity kind in Datastore
module.exports = gstore.model("InteriorRodent", schema);
