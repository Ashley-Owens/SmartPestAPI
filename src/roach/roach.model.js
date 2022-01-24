const { instances } = require("gstore-node");
const gstore = instances.get("default");
const { Schema } = gstore;

// Create the "Roach Assessment" schema
const roachSchema = new Schema(
	{
		propertyName: { type: String, required: true },
		address: { type: String, required: true },
		technician: { type: String, required: true },
		dateCreated: { type: Date, default: gstore.defaultValues.NOW },
		dateModified: { type: Date },
		madeContact: { type: Boolean, required: true },
		numBuilding: { type: Number, required: true },
		numUnit: { type: Number, required: true },
		contactName: { type: String, optional: true },
		contactTitle: { type: String, optional: true },
		notes: { type: String, optional: true },
	},
	{
		queries: {
			readAll: true,
			showKey: true,
		},
	}
);

// Query shortcut for listing entities
const listSettings = {
	limit: 15,
	order: { property: "dateCreated" },
};
roachSchema.queries("list", listSettings);

// Generates "RoachAssessment" entity kind in Datastore
module.exports = gstore.model("RoachAssessment", roachSchema);
