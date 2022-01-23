const PORT = process.env.PORT || 8080;
const app = require("express")();
const db = require("./config/database");

// Initialize routes
const roachRouter = require("./roach/roach.route");

app.set("trust proxy", true);
app.use("/roach", roachRouter);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
