const PORT = process.env.PORT || 8080;
const { Gstore, instances } = require("gstore-node");
const { Datastore } = require("@google-cloud/datastore");
const app = require("express")();

// Initialize Datastore and ORM
const gstore = new Gstore({ errorOnEntityNotFound: false });
const datastore = new Datastore({
	projectId: "smartpestapi",
});

// Connect ORM to datastore and save the instance
gstore.connect(datastore);
instances.set("unique-id", gstore);

// Initialize routes
const roachRouter = require("./routes/roach");

app.set("trust proxy", true);
app.use("/roach", roachRouter);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
