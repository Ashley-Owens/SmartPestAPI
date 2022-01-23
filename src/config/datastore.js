// const { Gstore, instances } = require("gstore-node");
// const { Datastore } = require("@google-cloud/datastore");

// const gstore = new Gstore({ errorOnEntityNotFound: false });
// const datastore = new Datastore({
// 	projectId: "smartpestapi",
// });

// gstore.connect(datastore);

// // Save the gstore instance
// instances.set("unique-id", gstore);

// const { Datastore } = require("@google-cloud/datastore");
// const { Gstore } = require("gstore-node");

// const gstore = new Gstore({ errorOnEntityNotFound: false });
// const datastore = new Datastore();
// gstore.connect(datastore);

// module.exports.datastore = datastore;
// module.exports.gstore = { gstore };
// module.exports.fromDatastore = function fromDatastore(item) {
// 	item.id = item[Datastore.KEY].id;
// 	return item;
// };
