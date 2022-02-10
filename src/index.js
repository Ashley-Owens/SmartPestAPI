const router = (module.exports = require("express").Router());

// router.use("/bedbug-inspection", require("./routes/bedbug-inspection.route"));
router.use("/lead", require("./routes/lead.route"));
router.use("/leads", require("./routes/leads.route"));
