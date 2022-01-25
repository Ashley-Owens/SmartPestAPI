const { instances } = require("gstore-node");
const gstore = instances.get("default");
const { Schema } = gstore;

// Create the "BedBugTreatment" schema
const schema = new Schema(
	{
		isRegular: { type: Boolean, required: true },
		isExtreme: { type: Boolean, required: true },
		photos: { type: Array },
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

// Generates "BedBugTreatment" entity kind in Datastore
module.exports = gstore.model("BedBugTreatment", schema);
