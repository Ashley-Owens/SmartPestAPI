const gstore = require("../config/datastore.js");
const Schema = gstore.Schema;

// Create the "Roach Assessment" schema
const roachSchema = new Schema(
	{
		propertyName: { type: String, required: true },
		address: { type: String, required: true },
		technician: { type: String, required: true },
		dateCreated: { type: Date, default: gstore.defaultValues.NOW },
		dateModified: { type: Date, required: true },
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

// Create the "Roach Assessment" model
const RoachModel = gstore.model("RoachAssessment", roachSchema);
