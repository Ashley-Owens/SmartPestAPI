const { Gstore, instances } = require("gstore-node");
const { Datastore } = require("@google-cloud/datastore");

// Initialize new Datastore and ORM instances
const gstore = new Gstore({ errorOnEntityNotFound: false });
const datastore = new Datastore({
	projectId: "smartpestapi",
});

// Connect gstore to datastore and save instance
gstore.connect(datastore);
instances.set("unique-id", gstore);

module.exports.datastore = datastore;
module.exports.gstore = { gstore };
