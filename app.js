const PORT = process.env.PORT || 8080;
const app = require("express")();
const db = require("./src/config/database");

// Initialize routes
app.use("/", require("./src/index"));
app.set("trust proxy", true);

// Error handlers: catches 404 and forward to error handler
app.use(function (req, res, next) {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// Development error handler: prints stacktrace
if (app.get("env") === "development") {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.json({
			message: err.message,
			error: err,
		});
	});
}

// Production error handler: stacktraces not leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		message: err.message,
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
