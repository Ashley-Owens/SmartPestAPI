const { instances } = require("gstore-node");
const gstore = instances.get("default");
const { Schema } = gstore;

// Create the "BirdExclusion" schema
const schema = new Schema(
	{
		ladderRequired: { type: Boolean, required: true },
		boomLiftRequired: { type: Boolean, required: true },
		spikeLength: { type: Number, required: true },
		nettingLength: { type: Number, required: true },
		nettingWidth: { type: Number, required: true },
		tensionLineLength: { type: Number, required: true },
		boomLiftHeight: { type: Number },
		photos: { type: Array, required: true },
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

// Generates "BirdExclusion" entity kind in Datastore
module.exports = gstore.model("BirdExclusion", schema);
