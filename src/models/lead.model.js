const { instances } = require("gstore-node");
const gstore = instances.get("default");
const { Schema } = gstore;

// Creates the Lead schema for common attributes
const schema = new Schema(
	{
		technician: { type: String, required: true },
		propertyName: { type: String, required: true },
		address: { type: String, required: true },
		zipCode: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		targetPest: { type: String, required: true },
		service: { type: String, required: true },
		status: { type: String, default: "New" },
		dateCreated: { type: Date, default: gstore.defaultValues.NOW },
		madeContact: { type: Boolean, required: true },
		contactName: { type: String },
		contactTitle: { type: String },
		notes: { type: String },
	},
	{
		explicitOnly: false,
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

// Generates "BedBugInspection" entity kind in Datastore
module.exports = gstore.model("lead", schema);
