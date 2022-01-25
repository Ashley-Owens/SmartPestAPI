const { instances } = require("gstore-node");
const gstore = instances.get("default");
const { Schema } = gstore;

// Create the "Roach Assessment" schema
const schema = new Schema(
	{
		numBuilding: { type: Number, required: true },
		numUnit: { type: Number, required: true },
		propertyName: { type: String, required: true },
		address: { type: String, required: true },
		zipCode: { type: String, required: true },
		city: { type: String, required: true },
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
	limit: 15,
	order: { property: "dateCreated" },
};
schema.queries("list", listSettings);

// Generates "RoachAssessment" entity kind in Datastore
module.exports = gstore.model("RoachAssessment", schema);
