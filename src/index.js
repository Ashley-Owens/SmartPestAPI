const router = (module.exports = require("express").Router());

router.use("/bedbug-inspection", require("./routes/bedbug-inspection.route"));
router.use("/bedbug-treatment", require("./routes/bedbug-treatment.route"));
router.use("/bird-exclusion", require("./routes/bird-exclusion.route"));
router.use("/bird-trapping", require("./routes/bird-trapping.route"));
router.use("/dewebbing", require("./routes/dewebbing.route"));
router.use("/exterior-rodent", require("./routes/exterior-rodent.route"));
router.use("/honeycomb", require("./routes/honeycomb.route"));
router.use("/interior-rodent", require("./routes/interior-rodent.route"));
router.use("/mosquito", require("./routes/mosquito.route"));
router.use("/roach-assessment", require("./routes/roach.route"));
router.use("/rodent-exclusion", require("./routes/rodent-exclusion.route"));
router.use("/scorpion", require("./routes/scorpion.route"));
router.use("/snake", require("./routes/snake.route"));
router.use("/termite", require("./routes/termite.route"));
