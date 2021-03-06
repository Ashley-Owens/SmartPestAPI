const { Gstore, instances } = require("gstore-node");
const { Datastore } = require("@google-cloud/datastore");

// Initialize new Datastore and ORM instances
const gstore = new Gstore();
const datastore = new Datastore();

// Connect gstore to datastore and save instance
gstore.connect(datastore);
instances.set("default", gstore);

module.exports.datastore = datastore;
module.exports.gstore = { gstore };
