require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = require("express")();
const db = require("./src/config/database");
const { auth } = require("express-openid-connect");

// ** FIX: Enables CORS globally **
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});

const config = {
	authRequired: true,
	auth0Logout: true,
	secret: process.env.AUTH0_CLIENT_SECRET,
	baseURL: `http://localhost:${PORT}`,
	clientID: process.env.AUTH0_CLIENT_ID,
	issuerBaseURL: "https://smart-pest-api.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", async (req, res) => {
	console.log(req);
	res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", (req, res) => {
	res.send(JSON.stringify(req.oidc.user));
});

// Initializes routes
app.use("/", require("./src/index"));
app.set("trust proxy", true);

// Catches 404 and forwards to error handlers
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
		// Comment this out when ready for prod
		error: err,
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
