const router = (module.exports = require("express").Router());

router.use("/roach", require("./roach/roach.route"));
router.use("/bedbugtreatment", require("./bedbug-treatment/bbt.route"));
router.use("/bedbuginspection", require("./bedbug-inspection/bbi.route"));
