const router = (module.exports = require("express").Router());

router.use("/bedbug-inspection", require("./bedbug-inspection/bbi.route"));
router.use("/bedbug-treatment", require("./bedbug-treatment/bbt.route"));
router.use("/bird-exclusion", require("./bird-exclusion/birdex.route"));
router.use("/bird-trapping", require("./bird-trapping/bird.route"));
router.use("/dewebbing", require("./dewebbing/dewebbing.route"));
router.use("/exterior-rodent", require("./exterior-rodent/ext-rodent.route"));
router.use("/honeycomb", require("./honeycomb/honeycomb.route"));
router.use("/interior-rodent", require("./interior-rodent/int-rodent.route"));
router.use("/mosquito", require("./mosquito/mosquito.route"));
router.use("/roach-assessment", require("./roach-assessment/roach.route"));
router.use("/rodent-exclusion", require("./rodent-exclusion/rodent.route"));
router.use("/scorpion", require("./scorpion/scorpion.route"));
router.use("/snake", require("./snake/snake.route"));
