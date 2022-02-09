const { instances } = require("gstore-node");
const gstore = instances.get("default");
const { Schema } = gstore;

// Create the "ExteriorRodent" schema
const schema = new Schema(
	{
		numStations: { type: Number, required: true },
		cutOut: { type: Boolean, required: true },
		numPropertyBuildings: { type: Number, required: true },
		buildingNums: { type: Array, required: true },
		observations: { type: String, required: true },
		status: { type: String, default: "New" },
		kind: { type: String, default: "ExteriorRodent" },
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

// Generates "ExteriorRodent" entity kind in Datastore
module.exports = gstore.model("ExteriorRodent", schema);
