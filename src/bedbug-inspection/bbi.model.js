const { instances } = require("gstore-node");
const gstore = instances.get("default");
const { Schema } = gstore;

// Create the "BedBugInspection" schema
const schema = new Schema(
	{
		isVisual: { type: Boolean, required: true },
		isFull: { type: Boolean, required: true },
		isK9: { type: Boolean, required: true },
		reason: { type: String },
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
	order: { property: "dateCreated" },
};
schema.queries("list", listSettings);

// Generates "BedBugInspection" entity kind in Datastore
module.exports = gstore.model("BedBugInspection", schema);
