const PORT = process.env.PORT || 8080;
const app = require("express")();
const roachRouter = require("./routes/roach");
app.set("trust proxy", true);
app.use("/roachassessment", roachRouter);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
