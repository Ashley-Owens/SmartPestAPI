const { instances } = require("gstore-node");
const gstore = instances.get("unique-id");
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

/*
 * List entities query shortcut
 */
const listSettings = {
	limit: 15,
	order: { property: "address" },
};
roachSchema.queries("list", listSettings);

/*
 * Export the Roach Model
 * It will generate "RoachAssessment" entity kind in Datastore
 */
module.exports = gstore.model("RoachAssessment", roachSchema);
