const { instances } = require("gstore-node");
const gstore = instances.get("default");
const { Schema } = gstore;

// Create the "Termite" schema
const schema = new Schema(
	{
		photos: { type: Array, required: true },
		buildingNums: { type: Array },
		unitNums: { type: Array },
		numTubes: { type: Number, required: true },
		tubeDistance: { type: Number, required: true },
		drillingDistance: { type: Number, required: true },
		trenchingDistance: { type: Number, required: true },
		isDrywood: { type: Boolean, required: true },
		status: { type: String, default: "New" },
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

// Generates "Termite" entity kind in Datastore
module.exports = gstore.model("Termite", schema);
