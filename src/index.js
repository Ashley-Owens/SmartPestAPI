const router = (module.exports = require("express").Router());

router.use("/roach-assessment", require("./roach/roach.route"));
router.use("/bedbug-treatment", require("./bedbug-treatment/bbt.route"));
router.use("/bedbug-inspection", require("./bedbug-inspection/bbi.route"));
router.use("/bird-exclusion", require("./bird-exclusion/birdex.route"));
router.use("/bird-trapping", require("./bird-trapping/bird.route"));
